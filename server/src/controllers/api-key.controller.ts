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
        const apiKey = await ApiKeyController.ApiKeyRepository.getApiKeyClient(
          userId
        );
        next(
          new AppError(
            "There's no need to create another API key. You can use your current one.",
            403
          )
        );
      }

      if (userId) {
        const newKey = await ApiKeyController.ApiKeyRepository.addApiKey(
          apiKeyName,
          userId
        );
        res.status(201).json({ message: "API Key created successfully" });
      }
    } catch (error) {
      next(new AppError("Error in creating apikey", 500));
    }
  }

  static async getApiKeyClient(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const userId = req.session.userId;
      if (userId) {
        const apiKey = await ApiKeyController.ApiKeyRepository.getApiKeyClient(
          userId
        );
        res.status(200).json(apiKey);
      }
    } catch (error) {
      next(new AppError("Error in getting api key", 500));
    }
  }

  static async deleteApiKey(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.session.userId;

      if (userId) {
        const apiKey = await ApiKeyController.ApiKeyRepository.deleteApiKey(
          userId
        );
        res.status(200).json({ message: "API Key deleted" });
      }
    } catch (error) {
      next(new AppError("Error in deleting API Key", 500));
    }
  }
}
