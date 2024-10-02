import { Router } from "express";
import { ApiKeyController } from "../controllers/api-key.controller";
import { requireAuth } from "../middleware/middleware";
const router = Router();

router.use(requireAuth)

router.route("/").get(ApiKeyController.getApiKeyClient)
router.route("/add").post(ApiKeyController.addApiKey);
router.route("/delete").delete(ApiKeyController.deleteApiKey);

export default router;
