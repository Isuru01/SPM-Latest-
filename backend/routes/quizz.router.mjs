import { Router } from "express";
import {
  updateQuizz,
  fetchQuizzes,
  fetchQuizz,
  deleteQuizz,
} from "../controllers/quizz.controller.mjs";

const router = Router();

router.route("/").get(fetchQuizzes).put(updateQuizz).delete(deleteQuizz);
router.route("/:qid").put().get(fetchQuizz);

export default router;
