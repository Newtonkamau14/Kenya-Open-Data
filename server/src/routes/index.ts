import { Router } from "express";
import countyRouter from "./county.router";
import authRouter from "./auth.router";
const router = Router();

router.use("/", countyRouter);
router.use("/auth", authRouter);

export default router;
