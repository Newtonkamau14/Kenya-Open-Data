import { Router } from "express";
import apiRouter from "./api.router";
import authRouter from "./auth.router";
const router = Router();

router.use("/", apiRouter);
router.use("/auth", authRouter);

export default router;
