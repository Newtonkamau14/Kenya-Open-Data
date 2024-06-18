import { Router } from "express";
import { CountyController } from "../controllers/county.controller";
const router = Router();

router.route("/add-all-county-data").post(CountyController.addAll);
router.route("/counties").get(CountyController.getAllCounties);
router.route("/counties/size").get(CountyController.getCountiesBySize);
router
  .route("/counties/population")
  .get(CountyController.getCountiesPopulation);
router
  .route("/counties/populationdensity")
  .get(CountyController.getCountiesPopulationDensity);
router.route("/counties/households").get(CountyController.getCountiesHousehold);
// router.route("/counties/registeredvoters").get();
router.route("/counties/capital").get(CountyController.getCountiesCapital);
router
  .route("/counties/constituencies")
  .get(CountyController.getConstituenciesByCounty);
router
  .route("/counties/:countyCode")
  .get(CountyController.getCountyByCountyCode);
router.route("/constituencies").get(CountyController.getConstituencies);
router
  .route("/constituencies/:constituencyCode")
  .get(CountyController.getConstituencyByConstituencyCode);

export default router;
