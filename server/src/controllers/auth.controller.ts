import { NextFunction, Request, Response } from "express";
import { IUser } from "../models/user";
import { AuthRepository } from "../repository/auth.repository";
import { AppError, logger } from "../util/util";

export class AuthController {
  private static authRepository = new AuthRepository();

  static async signUp(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
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
        req.session.save();
        res.status(201).json({
          message: "Account created successfully",
          user: {
            id: newUser.id,
          },
        });
      }
    } catch (error) {
      next(new AppError("Error in signing up user", 500));
    }
  }

  static async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
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
      req.session.save();
      res.status(200).json({
        message: "Logged in successfully",
        user: { id: user.id },
      });
    } catch (error) {
      next(new AppError("Error logging in user", 500));
    }
  }

  static async logout(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      req.session.destroy((err) => {
        if (err) {
          // logger.error("Error destroying session", err);
          res.status(500).json({ message: "Error logging out" });
          return;
        }

        // Clear the session cookie
        res.clearCookie("connect.sid", {
          httpOnly: true,
          sameSite: "none",
          secure: process.env.NODE_ENV === "production",
        });

        res.status(200).json({ message: "You're signed out" });
      });
    } catch (error) {
      next(new AppError("Error logging out user", 500));
    }
  }

  static async checkSession(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    if (req.session.userId) {
      const getUser = await AuthController.authRepository.getUsername(req.session.userId)
      req.session.username = getUser?.username
      const user = { userId: req.session.userId, username: req.session.username };
      res.json(user);
    } else {
      res.status(401).json({ message: "Not Authenticated" });
    }
  }
}
