import dayjs from "dayjs";
import Quizz from "../models/quizz.model.mjs";
import { compareSync } from "bcrypt";

const updateQuizz = async (req, res, next) => {
  const quizz = req.body;

  try {
    const updateQuizz = await Quizz.findOneAndUpdate(
      { title: quizz.title },
      quizz,
      { upsert: true, new: true }
    );

    res.status(200).json(updateQuizz);
  } catch (error) {
    next(error);
  }
};

const updateQuizzNew = async (req, res, next) => {
  const quizz = req.body;
  const { qid } = req.params;

  try {
    const updateQuizz = await Quizz.findOneAndUpdate({ _id: qid }, quizz, {
      upsert: true,
      new: true,
    });

    res.status(200).json(updateQuizz);
  } catch (error) {
    next(error);
  }
};

const fetchQuizzes = async (req, res, next) => {
  try {
    console.log("Cla");
    const quizzes = await Quizz.find();

    console.log(quizzes);

    res.status(200).json(quizzes);
  } catch (error) {
    next(error);
  }
};

const fetchQuizz = async (req, res, next) => {
  const { qid } = req.params;

  try {
    const quizz = await Quizz.findOne({ _id: qid });

    console.log(quizz);

    res.status(200).json(quizz);
  } catch (error) {
    next(error);
  }
};

const deleteQuizz = async (req, res, next) => {
  const { qid } = req.params;

  console.log(qid);

  try {
    const quizz = await Quizz.findOneAndDelete({ _id: qid });

    if (quizz) {
      res.status(200).json({ message: "Quizz deleted successfully" });
    } else {
      res.status(404).json({ message: "Quizz not found" });
    }
  } catch (error) {
    next(error);
  }
};

export { updateQuizz, fetchQuizzes, fetchQuizz, deleteQuizz, updateQuizzNew };
