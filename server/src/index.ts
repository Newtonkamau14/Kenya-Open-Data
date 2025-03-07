import dotenv from "dotenv";
dotenv.config();

import express, { type Application } from "express";
import YAML from "yamljs";
import swaggerUI from "swagger-ui-express";
import path from "path";
import cors from "cors";
import * as session from "express-session";
import MySQLStore, { type Options } from "express-mysql-session";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { normalizePort } from "./util/util";
import { connection } from "./config/database";
import { connectRedis } from "./config/redis";
import router from "./routes/index";
import { errorHandler } from "./middleware/middleware";
import corsOptions from "./config/corsOptions";

const PORT = normalizePort(process.env.PORT || "3000");
const app: Application = express();
const MySQLStoreInstance = MySQLStore(session);

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
  charset: "utf8mb4_bin",
  schema: {
    tableName: "sessions",
    columnNames: {
      session_id: "session_id",
      expires: "expires",
      data: "data",
    },
  },
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

// Import necessary modules and middlewares first
app.use(helmet()); // Secure Express apps by setting various HTTP headers
// General middleware to handle JSON and URL-encoded data
app.set("trust proxy", 1);

app.use(cors(corsOptions)); // Ensure corsOptions includes credentials: true
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Session configuration (should come before CORS and other middlewares)
app.use(
  session.default({
    name: "kenya-open-data",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      path: "/",
      secure: true,
      maxAge: 259200000, // 3 days in milliseconds
      httpOnly: true,
      sameSite: "none",
    },
  })
);
app.use(cookieParser());

// Routes and main logic (should come after all general middleware)
app.use(router);
// Error handling middleware (placed after routes)
app.use(errorHandler);

//Start server
try {
  connectRedis();
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
