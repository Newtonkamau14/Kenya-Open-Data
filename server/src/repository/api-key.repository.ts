import { ResultSetHeader } from "mysql2";
import { connection } from "../config/database";
import { request } from "express";
import { IAPI } from "../models/api";
import { generateAPIKey } from "../util/util";

export class ApiKeyRepository {
  addApiKey(name: string, userId: string): Promise<IAPI | undefined> {
    return new Promise((resolve, reject) => {
      const apiKey = generateAPIKey();
      connection.query<IAPI[]>(
        `INSERT INTO apiKeys(userId, name, apiKey) VALUES(?,?,?)`,
        [userId, name, apiKey],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results?.[0]);
          }
        }
      );
    });
  }
  getApiKeyClient(userId: string): Promise<IAPI | undefined> {
    return new Promise((resolve, reject) => {
      connection.query<IAPI[]>(
        `SELECT 
            userId,
            name,
            apiKey 
          FROM 
            apiKeys 
          WHERE userId = ?`,
        [userId],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results?.[0]);
          }
        }
      );
    });
  }

  getApiKeyAuth(apiKey: string): Promise<IAPI | undefined> {
    return new Promise((resolve, reject) => {
      connection.query<IAPI[]>(
        `SELECT apiKey FROM apiKeys WHERE apiKey = ?`,
        [apiKey],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results?.[0]);
          }
        }
      );
    });
  }
  deleteApiKey(userId: string): Promise<IAPI> {
    return new Promise((resolve, reject) => {
      connection.query<IAPI[]>(
        `DELETE 
          FROM 
            apiKeys 
          WHERE userId = ?`,
          [userId],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results?.[0]);
          }
        }
      );
    });
  }
}
