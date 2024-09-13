import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { AuthRepository } from "../repository/auth.repository";
import { connection } from "../config/database";
import { IUser } from "../models/user";


const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.userId) {
    next();
  } else {
    res
      .status(401)
      .json({ message: " Sign up or log in to your existing account" });
  }
};


const authenticateKey = async (req: Request, res: Response, next: NextFunction) => {
  const authRepository = new AuthRepository();
  let API_KEY = req.headers["x-api-key"] as string | undefined;

  if(!API_KEY){
    API_KEY = req.query.API_KEY as string;
  }

  if (!API_KEY) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const user = await authRepository.getApiKey(API_KEY); // Assuming this returns IUser | undefined

  if (!user || user.apiKey !== API_KEY) { // Compare with the user's apiKey field
    return res.status(403).json({
      message: "Forbidden",
    });
  }

  next();
};


const errorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";

  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};

export { requireAuth,authenticateKey,errorHandler };