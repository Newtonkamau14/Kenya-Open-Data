import { Router } from "express";
import countyRouter from "./county.router";
const router = Router();

router.use("/", countyRouter);

export default router;
