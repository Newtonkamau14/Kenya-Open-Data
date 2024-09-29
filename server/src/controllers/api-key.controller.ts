import { Request, Response, NextFunction } from "express";
import { ApiKeyRepository } from "../repository/api-key.repository";
import { AppError } from "../util/util";

export class ApiKeyController {
  private static ApiKeyRepository = new ApiKeyRepository();

  static async addApiKey(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { apiKeyName } = req.body;
    try {
      const userId = req.session.userId;

      if (userId) {
        const newKey = await ApiKeyController.ApiKeyRepository.addApiKey(
          apiKeyName,
          userId
        );
        res.status(201).json({ message: "API Key created successfully" });
      } else {
        next(new AppError("Please login to your account or create one", 401));
      }
    } catch (error) {
      next(new AppError("Error in creating apikey", 500));
      console.log(error);
    }
  }

  static async getApiKeyClient(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.session.userId;
      if (userId) {
        const apiKey = await ApiKeyController.ApiKeyRepository.getApiKeyClient(
          userId
        );
        res.status(200).json(apiKey);
      } 
      else {
        return next(new AppError("Unauthorized access", 401));
      }
    } catch (error) {
      next(new AppError("Error in getting api key", 500));
    }
  }

  static async deleteApiKey(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.session.userId

      if(userId) {
        const apiKey = await ApiKeyController.ApiKeyRepository.deleteApiKey(userId)
        res.status(200).json({message : "API Key deleted"})
      }
      else {
        return next(new AppError("Unauthorized access", 401));
      }
    } catch (error) {
      next(new AppError("Error in deleting API Key", 500));
    }
  }
}
