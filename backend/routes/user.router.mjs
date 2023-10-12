import { Router } from "express";
import {
  getAllUser,
  updateUser,
  fetchUser,
  saveJob,
  fetchSaveJobs,
} from "../controllers/user.controller.mjs";

const router = Router();

router.route("/").get(fetchUser);
router.route("/savejob").put(saveJob).get(fetchSaveJobs);

export default router;
