import { Router } from "express";
import {
  fethchTask,
  updateTask,
  fetchTasks,
  deleteTask,
} from "../controllers/task.controller.mjs";

const router = Router();

router.route("/").get(fetchTasks).put(updateTask).delete(deleteTask);
router.route("/:tid").get(fethchTask);

export default router;
