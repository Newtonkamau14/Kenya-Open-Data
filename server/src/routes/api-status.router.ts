import { Router } from "express";
import { ApiStatusController } from "../controllers/api-status.controller";
const router = Router();

router.route("/").get(ApiStatusController.getStatus);

export default router;
