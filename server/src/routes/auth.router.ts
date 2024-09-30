import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
const router = Router();

router.route("/signup").post(AuthController.signUp);
router.route("/login").post(AuthController.login);
router.route("/logout").post(AuthController.logout);
router.route("/check-session").get(AuthController.checkSession)

export default router;
