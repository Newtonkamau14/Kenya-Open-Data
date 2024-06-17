import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user: any;
      // user?: Record<string, any>;
      locals?: Record<string, any>;
    }
  }
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_HOST: string;
      DATABASE_USER: string;
      DATABASE_PASSWORD: string;
      DATABASE_NAME: string;
    }
  }
}