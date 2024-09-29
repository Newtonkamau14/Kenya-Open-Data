import { Router } from "express";
import { ApiKeyController } from "../controllers/api-key.controller";
const router = Router();

router.route("/").get(ApiKeyController.getApiKeyClient)
router.route("/add").post(ApiKeyController.addApiKey);
router.route("/delete").delete(ApiKeyController.deleteApiKey);

export default router;
