import { type Request, type Response, type NextFunction } from "express";
import { redisClient } from "../config/redis";
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
      const userId = req.session?.userId;

      if (!userId) {
        res.status(401).json({ error: "Unauthorized: User not found" });
        return;
      }

      const cachedData = await redisClient.get(`apiKey:${userId}`);
      if (cachedData) {
        res.status(200).json(JSON.parse(cachedData)); // Exit early if cache hit
        return;
      }

      const existingApiKey = await ApiKeyController.ApiKeyRepository.getApiKeyClient(userId);

      if (existingApiKey) {
        return next(
          new AppError(
            "There's no need to create another API key. You can use your current one.",
            403
          )
        );
      }

      const newKey = await ApiKeyController.ApiKeyRepository.addApiKey(apiKeyName, userId);

      const expirationTime = 3600; // 1 hour in seconds
      await redisClient.set(`apiKey:${userId}`, JSON.stringify(newKey), {
        EX: expirationTime,
      });

      res.status(201).json({ message: "API Key created successfully" });
    } catch (error) {
      next(new AppError("Error in creating API key", 500));
    }
  }

  static async getApiKeyClient(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.session?.userId;

      if (!userId) {
        return res.status(401).json({ error: "Unauthorized: User not found" });
      }

      // Check cache first
      const cachedApiKey = await redisClient.get(`apiKey:${userId}`);
      if (cachedApiKey) {
        return res.status(200).json(JSON.parse(cachedApiKey));
      }

      // If not in cache, fetch from DB
      const apiKey = await ApiKeyController.ApiKeyRepository.getApiKeyClient(userId);

      if (!apiKey) {
        return res.status(404).json({ error: "API key not found" });
      }

      // Store in cache before responding
      await redisClient.set(`apiKey:${userId}`, JSON.stringify(apiKey), {
        EX: 3600, // 1 hour cache
      });

      res.status(200).json(apiKey);
    } catch (error) {
      console.log(error)
      next(new AppError("Error in getting API key", 500));
    }
  }

  static async deleteApiKey(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.session?.userId;
  
      if (!userId) {
        return res.status(401).json({ error: "Unauthorized: User not found" });
      }
  
      // Check if API key exists before deleting
      const existingApiKey = await ApiKeyController.ApiKeyRepository.getApiKeyClient(userId);
  
      if (!existingApiKey) {
        return res.status(404).json({ error: "No API key found to delete" });
      }
  
      // Delete API key from database
      await ApiKeyController.ApiKeyRepository.deleteApiKey(userId);
  
      // Invalidate cache
      await redisClient.del(`apiKey:${userId}`);
  
      res.status(200).json({ message: "API Key deleted successfully" });
    } catch (error) {
      next(new AppError("Error in deleting API Key", 500));
    }
  }
  
}
