import { Router } from "express";
import apiRouter from "./api.router";
import apiKeyRouter from "./api-key.router";
import authRouter from "./auth.router";
const router = Router();

router.use("/", apiRouter);
router.use("/api-key",apiKeyRouter)
router.use("/auth", authRouter);

export default router;
