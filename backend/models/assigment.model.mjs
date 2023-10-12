import { Schema, SchemaType, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const AssigmentSchema = new Schema({
  key: {
    type: String,
    default: () => uuidv4(),
  },
  active: {
    type: Boolean,
    default: false,
  },
  enrollKey: {
    type: String,
  },
  createdAt: {
    type: String,
    default: () => dayjs().format(),
  },
  title: {
    type: String,
    unique: true,
  },
  module: {
    type: String,
  },
  group: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  start: {
    type: String,
  },
  end: {
    type: String,
  },
  duration: {
    type: String,
    default: "05:48+05:30",
  },
  code: {
    type: String,
  },
  instruction: {
    type: String,
  },
  answers: [{ type: Schema.Types.ObjectId, ref: "Code" }],
});

// AssigmentSchema.pre("save", function (next) {
//   if (!this.key) {
//     this.key = uuidv4();
//   }

//   if (!this.createdAt) {
//     this.createdAt = dayjs().format();
//   }
//   next();
// });

const AssigmentModel = model("Assigment", AssigmentSchema);
export default AssigmentModel;
