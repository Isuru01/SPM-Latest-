import dayjs from "dayjs";
import Job from "../models/assigment.model.mjs";

const searchJobs = async (req, res, next) => {
  const { title, field } = req.query;
  try {
    let response;
    if (title && field) {
      response = await Job.find({ title: title, field: field });
    } else if (title) {
      response = await Job.find({ title: title });
    } else if (field) {
      response = await Job.find({ field: field });
    } else {
      response = await Job.find();
    }
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export { searchJobs };
