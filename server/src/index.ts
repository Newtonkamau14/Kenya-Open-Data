import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import YAML from "yamljs";
import swaggerUI from "swagger-ui-express";
import path from "path";
import cors from "cors";
import { normalizePort } from "./util/util";
import * as fs from "fs";
import { CountyRepository } from "./repository/county.repository";
import { ICounty } from "./models/county";
import { connection } from "./config/database";
import countyRouter from "./routes/county.router";
const PORT = normalizePort(process.env.PORT || "3000");
const app: Application = express();

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
app.use(cors());

//Routes
app.use("/",countyRouter)


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
