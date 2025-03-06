import { ResultSetHeader } from "mysql2";
import { connection } from "../config/database";
import { nanoid } from "../util/util";
import crypto from "crypto";
import { IUser } from "../models/user";

export class AuthRepository {
  getUserByEmail(email: string): Promise<IUser | undefined> {
    return new Promise((resolve, reject) => {
      connection.query<IUser[]>(
        `SELECT
           id,
           username,
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
      const id = nanoid();
      const salt = crypto.randomBytes(16).toString("hex");
      const hashedPassword = crypto
        .pbkdf2Sync(user.password, salt, 1000, 64, "sha512")
        .toString("hex");

      const index = user.email.indexOf("@");
      const username = user.email.slice(0, index);
      connection.query<ResultSetHeader>(
        `INSERT INTO users(id, username, email, password, salt) VALUES(?, ?, ?, ?, ?)`,
        [id, username, user.email, hashedPassword, salt],
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

  getUsername(userId: string): Promise<IUser | undefined> {
    return new Promise((resolve, reject) => {
      connection.query<IUser[]>(
        `SELECT id,username FROM users WHERE id = ?`,
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
  // changePassword(user:IUser):Promise<IUser | undefined>{
  //   return new Promise((resolve,reject) =>{
  //     const salt = crypto.randomBytes(16).toString("hex");
  //     const hashedPassword = crypto
  //       .pbkdf2Sync(user.password, salt, 1000, 64, "sha512")
  //       .toString("hex");
  //     connection.query<ResultSetHeader>(
  //       `UPDATE users SET password = ?,salt = ? WHERE userId = ${userId}`,
  //       [hashedPassword,salt],
  //       (err,result) => {
  //         if(err){
  //           reject(err)
  //         }
  //         else {
  //           resolve(result?.[0]);
  //         }
  //       }
  //     )
  //   })
  // }
}
