import { Router } from "express";
import {
  updateQuizz,
  fetchQuizzes,
  fetchQuizz,
  deleteQuizz,
  updateQuizzNew,
} from "../controllers/quizz.controller.mjs";

const router = Router();

router.route("/").get(fetchQuizzes).put(updateQuizz);
router.route("/:qid").get(fetchQuizz).delete(deleteQuizz).put(updateQuizzNew);

export default router;
