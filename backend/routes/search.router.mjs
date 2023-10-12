import { Router } from "express";
import { searchJobs } from "../controllers/search.controller.mjs";

const router = Router();

router.route("/").get(searchJobs);
// router.route("/plannet").get(getAllPlannet);

export default router;
