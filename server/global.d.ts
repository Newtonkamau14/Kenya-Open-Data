import { Request } from "express";
import "express-session";

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
      NODE_ENV: string;
      DATABASE_HOST: string;
      DATABASE_USER: string;
      DATABASE_PASSWORD: string;
      DATABASE_NAME: string;
      DATABASE_PORT: number;
      SESSION_SECRET: string;
      API_URL: string
    }
  }
}

declare module "express-session" {
  interface SessionData {
    userId: string;
    username: string
  }
}
