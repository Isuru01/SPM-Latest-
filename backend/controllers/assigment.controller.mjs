import dayjs from "dayjs";
import Assigment from "../models/assigment.model.mjs";
import mongoose from "mongoose";

import Code from "../models/code.model.mjs";

const createAssigment = async (req, res, next) => {
  const data = req.body;

  try {
    const assigment = await Assigment.create(data);

    if (assigment) res.status(201).json(assigment);
    else res.status(400).json({ message: "assigment creation failed" });
  } catch (error) {
    next(error);
  }
};

const updateAssigment = async (req, res, next) => {
  const assigment = req.body;

  try {
    const updatedAssigment = await Assigment.findOneAndUpdate(
      { _id: assigment.aid },
      assigment,
      { upsert: true, new: true }
    );

    res.status(200).json(updatedAssigment);
  } catch (error) {
    next(error);
  }
};

const fetchAllAssigment = async (req, res, next) => {
  try {
    const assigments = await Assigment.find();

    res.status(200).json(assigments);
  } catch (error) {
    next(error);
  }
};

const fetchAssigment = async (req, res, next) => {
  const { id } = req.params;

  try {
    const assigment = await Assigment.findOne({
      _id: id,
    });

    console.log(assigment);

    res.status(200).json(assigment);
  } catch (error) {
    next(error);
  }
};

const deleteAssigment = async (req, res, next) => {
  const { id } = req.params;

  try {
    const assigment = await Assigment.findOneAndDelete({ _id: id });

    console.log(assigment);
    if (assigment) {
      res.status(200).json({ message: "Assigment deleted successfully" });
    } else {
      res.status(404).json({ message: "Assigment not found" });
    }
  } catch (error) {
    next(error);
  }
};

const assigmentAnalysis = async (req, res, next) => {
  const { id } = req.params;

  try {
    const assigment = await Assigment.findOne({ _id: id }).populate("answers");

    res.status(200).json(assigment);
  } catch (error) {
    next(error);
  }
};

const getUserAssigment = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { user } = req.user;

    console.log(user.username);

    try {
      let data = await Code.findOne({ assigment: id, user: user.username });

      if (!data) {
        data = await Assigment.findOne({ _id: id }, { code: 1 });
      }

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  } catch (error) {}
};

const submitUserAssigment = async (req, res, next) => {
  const { id } = req.params;
  // const user = "IT21305900";
  const data = req.body;
  const { user } = req.user;

  try {
    let code = await Code.findOne({ assigment: id, user: user.username });

    if (!code) {
      code = await Code.create({ assigment: id, user: user.username, ...data });

      const updatedAssignment = await Assigment.findByIdAndUpdate(
        id,
        { $push: { answers: code._id } },
        { new: true }
      );
    } else {
      await Code.findOneAndUpdate({ assigment: id, user: user.username }, data);
    }

    res.status(200).json(code);
  } catch (error) {
    next(error);
  }
};

export {
  getUserAssigment,
  submitUserAssigment,
  // createUserAssigment,
  assigmentAnalysis,
  createAssigment,
  updateAssigment,
  fetchAssigment,
  fetchAllAssigment,
  deleteAssigment,
};
