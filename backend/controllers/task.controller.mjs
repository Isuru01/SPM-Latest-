import dayjs from "dayjs";
import Task from "../models/task.model.mjs";
import mongoose from "mongoose";
import Assigment from "../models/assigment.model.mjs";

const fetchTasks = async (req, res, next) => {
  const { aid } = req.query;

  try {
    const assigment = await Assigment.findOne(
      {
        key: aid,
      },
      { _id: 1 }
    );

    console.log(assigment);

    const tasks = await Task.find({
      assigmentRef: assigment,
    });

    console.log(tasks);

    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

const fethchTask = async (req, res, next) => {
  const { tid } = req.params;

  try {
    const response = await Task.findOne({ key: tid });
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  let task = req.body;

  try {
    //get the assigment
    const assigment = await Assigment.findOne({ key: task.assigmentRef });

    task = { ...task, assigmentRef: assigment._id };

    //update the assigment
    const updatedTask = await Task.findOneAndUpdate(
      { assigment: task.assigment, task: task.task },
      task,
      { upsert: true, new: true }
    );

    //find the assigment
    await Assigment.findOneAndUpdate(
      { _id: assigment._id },
      { $addToSet: { taskRef: updatedTask._id } }
    );

    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  console.log(req.body);
  const { tid } = req.body;

  console.log("call", tid);

  try {
    const task = await Task.findOneAndRemove({ key: tid });

    if (task) {
      // Find the assigment and remove the task reference
      await Assigment.findOneAndUpdate(
        { _id: task.assigmentRef },
        { $pull: { taskRef: task._id } }
      );

      res.status(200).json({ message: "Task deleted successfully" });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    next(error);
  }
};

export { fethchTask, fetchTasks, updateTask, deleteTask };
