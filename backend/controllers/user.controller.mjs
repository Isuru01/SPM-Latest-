import User from "../models/user.model.mjs";
import Jobs from "../models/assigment.model.mjs";
import jwt from "jsonwebtoken";

const signUpUser = async (req, res, next) => {
  const user = req.body;

  try {
    const response = await User.create(user);

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const signInUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const response = await User.findOne({ email, password }, { save: 0 });

    const token = jwt.sign({ user: response }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    console.log(token);
    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
      })
      .json({ token });

    // console.log(response);

    // res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const saveJob = async (req, res, next) => {
  const { key } = req.body;
  const {
    user: { email },
  } = req.user;

  try {
    const user = await User.findOne({ email });
    // check if the user exists
    if (user) {
      // update the save array with the key
      await User.updateOne({ email }, { $addToSet: { save: key } });
      res.status(200).json({ message: "Key added to save array" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    next(error);
  }
};

const fetchSaveJobs = async (req, res, next) => {
  const {
    user: { email },
  } = req.user;

  try {
    const { save } = await User.findOne({ email }, { save: 1 });

    const jobs = [];

    for (const key of save) {
      const job = await Jobs.findOne({ key });
      jobs.push(job);
    }

    res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};

const fetchUser = async (req, res, next) => {
  const {
    user: { email },
  } = req.user;

  try {
    const response = await User.findOne({ email });

    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const getAllUser = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

export {
  signUpUser,
  signInUser,
  fetchUser,
  fetchSaveJobs,
  saveJob,
  getAllUser,
  updateUser,
};
