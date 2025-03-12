import dotenv from "dotenv";
dotenv.config();

import express, { type Application } from "express";
import YAML from "yamljs";
import swaggerUI from "swagger-ui-express";
import path from "path";
import cors from "cors";
import * as session from "express-session";
import cookieParser from "cookie-parser";
import { RedisStore } from "connect-redis";
import helmet from "helmet";
import { normalizePort } from "./util/util";
import { connection } from "./config/database";
import { connectRedis, redisClient } from "./config/redis";
import router from "./routes/index";
import { collectAndSendTelemetry, errorHandler } from "./middleware/middleware";
import corsOptions from "./config/corsOptions";
import { SESSION_AGE } from "./constants";

const PORT = normalizePort(process.env.PORT || "3000");
const app: Application = express();

const redisStore = new RedisStore({
  client: redisClient,
  prefix: "session",
  ttl: SESSION_AGE,
});

if (PORT === false) {
  console.error("Invalid port. Server not starting.");
  process.exit(1);
}

// load api.yaml file, which is in the root directory of our project, as a JavaScript object
const swaggerJsDocs = YAML.load(path.resolve(__dirname, "../api.yaml"));
// setup docs from our specification file and serve on the /docs route
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

// 1️.Security middleware (always first)
app.use(helmet()); // Secure Express apps by setting various HTTP headers
app.set("trust proxy", 1); // Needed if running behind a reverse proxy like Nginx

// 2️.CORS (Should be before session, to allow cross-origin requests)
app.use(cors(corsOptions));

// 3️.Body Parsers (JSON, URL-encoded)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 4.Cookie Parser (before session middleware)
app.use(cookieParser());

// 5️.Session middleware (after CORS and cookie parser)
app.use(
  session.default({
    name: "kenya-open-data",
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    store: redisStore,
    cookie: {
      path: "/",
      secure: true, // Set to false if in development (http)
      maxAge: SESSION_AGE, // 3 days in milliseconds
      httpOnly: true,
      sameSite: "none", // Required for cross-origin cookies
    },
  })
);

// 6️.**Telemetry middleware (Should be BEFORE routes)**
app.use(collectAndSendTelemetry);

// 7️.Main Router (AFTER all setup middleware)
app.use(router);

// 8️. **Error handling middleware (ALWAYS LAST)**
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
