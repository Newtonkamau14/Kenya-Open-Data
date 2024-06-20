import { ResultSetHeader } from "mysql2";
import { connection } from "../config/database";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import { IUser } from "../models/user";
import { logger } from "../util/util";

export class AuthRepository {
  getUserByEmail(email: string): Promise<IUser | undefined> {
    return new Promise((resolve, reject) => {
      connection.query<IUser[]>(
        `SELECT
           id,
           email,
           password,
           salt
        FROM
            users
        WHERE
            email = ?      
        `,
        [email],
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

  signUp(user: IUser): Promise<IUser> {
    return new Promise((resolve, reject) => {
      const id = uuidv4();
      const salt = crypto.randomBytes(16).toString("hex");
      const hashedPassword = crypto
        .pbkdf2Sync(user.password, salt, 1000, 64, "sha512")
        .toString("hex");
      connection.query<ResultSetHeader>(
        `INSERT INTO users(id, email, password, salt) VALUES(?, ?, ?, ?)`,
        [id, user.email, hashedPassword, salt],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            this.getUserByEmail(user.email)
              .then((newUser) => resolve(newUser!))
              .catch(reject);
          }
        }
      );
    });
  }

  login(email: string, password: string): Promise<IUser | undefined> {
    return new Promise((resolve, reject) => {
      this.getUserByEmail(email)
        .then((user) => {
          if (!user) {
            return resolve(undefined);
          }
          const hashedPassword = crypto
            .pbkdf2Sync(password, user.salt, 1000, 64, "sha512")
            .toString("hex");

          if (hashedPassword === user.password) {
            resolve(user);
          } else {
            resolve(undefined);
          }
        })
        .catch(reject);
    });
  }
}
