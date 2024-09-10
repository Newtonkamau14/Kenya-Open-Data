import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import YAML from "yamljs";
import swaggerUI from "swagger-ui-express";
import path from "path";
import cors from "cors";
import * as session from "express-session";
import MySQLStore, { Options } from "express-mysql-session";
import { MemoryStore, rateLimit } from "express-rate-limit";
import { normalizePort } from "./util/util";
import { connection } from "./config/database";
import router from "./routes/index";


const PORT = normalizePort(process.env.PORT || "3000");
const app: Application = express();
const MySQLStoreInstance = MySQLStore(session);

//limiter
const limiter = rateLimit({
  windowMs: 60000,
  store: new MemoryStore(),
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next, options) =>
		res.status(options.statusCode).send(options.message),
})

const options: Options = {
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  clearExpired: true,
  checkExpirationInterval: 900000,
  expiration: 86400000,
  createDatabaseTable: true,
  endConnectionOnClose: true,
  charset: 'utf8mb4_bin',
	schema: {
		tableName: 'sessions',
		columnNames: {
			session_id: 'session_id',
			expires: 'expires',
			data: 'data'
		}
	}
};

const sessionStore = new MySQLStoreInstance(options);

if (PORT === false) {
  console.error("Invalid port. Server not starting.");
  process.exit(1);
}

// load api.yaml file, which is in the root directory of our project, as a JavaScript object
const swaggerJsDocs = YAML.load(path.resolve(__dirname, "../api.yaml"));
// setup docs from our specification file and serve on the /docs route
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors());
app.use(session.default({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 259200000,
    httpOnly: true,
    sameSite: 'none'
  }
}))
app.use(limiter)
app.use(router);


//Start server
try {
  app.listen(PORT, () => {
    console.info(`Server is running at http://localhost:${PORT}`);
    connection.connect(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Database connected");
      }
    });
  });
} catch (error) {
  if (error instanceof Error) {
    console.error(`Error occurred: ${error.message}`);
  }
}

export { app };


