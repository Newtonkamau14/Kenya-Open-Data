import { Request, Response } from "express";
import { IUser } from "../models/user";
import { AuthRepository } from "../repository/auth.repository";
import { logger } from "../util/util";

export class AuthController {
  private static authRepository = new AuthRepository();

  static async signUp(req: Request, res: Response): Promise<void> {
    const user: IUser = req.body;
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        res.status(400).json({
          message: "Please fill in all required fields before submitting.",
        });
      }

      // Check for empty strings (optional improvement)
      if (email.trim() === "" || password.trim() === "") {
        res.status(400).json({
          message:
            "Looks like you missed a few fields. Just fill them in and you're good to go",
        });
      }
      const userExists = await AuthController.authRepository.getUserByEmail(
        email
      );

      if (userExists) {
        res.status(409).json({
          message:
            "An account with this email already exists. Please try a different one.",
        });
      } else {
        const newUser = await AuthController.authRepository.signUp(user);
        req.session.userId = newUser.id;
        res.status(201).json({ message: "Account created successfully" });
      }
    } catch (error) {
      logger.error("Error in signing up user", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    try {
      if (!email || !password) {
        res.status(400).json({
          message: "Please fill in all required fields before submitting.",
        });
        return;
      }

      // Check for empty strings (optional improvement)
      if (email.trim() === "" || password.trim() === "") {
        res.status(400).json({
          message:
            "Looks like you missed a few fields. Just fill them in and you're good to go.",
        });
        return;
      }

      const userExists = await AuthController.authRepository.getUserByEmail(
        email
      );

      if (!userExists) {
        res.status(404).json({
          message:
            "We couldn't find an existing account. Would you like to create a new one?",
        });
        return;
      }

      const user = await AuthController.authRepository.login(email, password);

      if (!user) {
        res.status(401).json({
          message: "Invalid email or password.",
        });
        return;
      }

      req.session.userId = user.id;
      res.status(200).json({ message: "Logged in successfully" });
    } catch (error) {
      logger.error("Error logging in user", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  
  static async logout(req: Request, res: Response): Promise<void> {
    try {
      req.session.destroy((err) => {
        if (err) {
          logger.error("Error destroying session", err);
          res.status(500).json({ message: "Error logging out" });
          return;
        }

        // Clear the session cookie
        res.clearCookie("connect.sid", {
          httpOnly: true,
          sameSite: "none",
          secure: process.env.NODE_ENV === 'production', 
        });

        res.status(200).json({ message: "You're signed out" });
      });
    } catch (error) {
      logger.error("Error logging out user", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
