import { Request } from "express";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TELEMETRY_SECRET: string;
      DATABASE_URL: string;
    }
  }
}

