import { Router } from "express";
import { ApiController } from "../controllers/api.controller";
import { authenticateKey } from "../middleware/middleware";
const router = Router();

router.use(authenticateKey);

router.route("/counties").get(ApiController.getAllCounties);
router.route("/counties/size").get(ApiController.getCountiesBySize);
router.route("/counties/population").get(ApiController.getCountiesPopulation);
router
  .route("/counties/populationdensity")
  .get(ApiController.getCountiesPopulationDensity);
router.route("/counties/households").get(ApiController.getCountiesHousehold);
router
  .route("/counties/registeredvoters")
  .get(ApiController.getCountiesRegisteredVoters);
router.route("/counties/capital").get(ApiController.getCountiesCapital);
router
  .route("/counties/constituencies")
  .get(ApiController.getConstituenciesByCounty);
router.route("/counties/:countyCode").get(ApiController.getCountyByCountyCode);
router.route("/constituencies").get(ApiController.getConstituencies);
router
  .route("/constituencies/:constituencyCode")
  .get(ApiController.getConstituencyByConstituencyCode);

export default router;
