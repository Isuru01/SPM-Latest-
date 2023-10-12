import { Schema, SchemaType, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const AssigmentSchema = new Schema({
  key: {
    type: String,
    default: () => uuidv4(),
  },
  task: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  assigment: {
    type: String,
  },
  assigmentRef: {
    type: Schema.Types.ObjectId,
    ref: "Assigment",
  },
  createdAt: {
    type: String,
    default: () => dayjs(),
  },
  tid: {
    type: String,
  },
  instruction: {
    type: String,
  },
  taskPdf: {
    type: String,
  },
  code: {
    type: String,
  },
  lang: {
    type: String,
  },
});

AssigmentSchema.pre("save", function (next) {
  if (!this.key) {
    this.key = uuidv4();
  }

  if (!this.createdAt) {
    this.createdAt = dayjs().format();
  }
  next();
});

const AssigmentModel = model("Task", AssigmentSchema);
export default AssigmentModel;
