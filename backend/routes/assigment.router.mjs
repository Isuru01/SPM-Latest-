import { Router } from "express";
import {
  updateAssigment,
  fetchAssigment,
  fetchAllAssigment,
  deleteAssigment,
  createAssigment,
  assigmentAnalysis,
  submitUserAssigment,
  getUserAssigment,
} from "../controllers/assigment.controller.mjs";

const router = Router();

router.route("/").post(createAssigment).get(fetchAllAssigment);
router.route("/analysis/:id").get(assigmentAnalysis);
router.route("/code/:id").post(submitUserAssigment).get(getUserAssigment);
router
  .route("/:id")
  .put(updateAssigment)
  .get(fetchAssigment)
  .delete(deleteAssigment);

export default router;
