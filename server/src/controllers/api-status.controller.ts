import { Request, Response, NextFunction } from "express";
import { AppError } from "../util/util";

export class ApiStatusController {
  static async getStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.status(200).json({
        status: "success",
        message: "API is running",
      });
    } catch (error) {
      next(new AppError("Internal Server Error.", 500));
    }
  }
}