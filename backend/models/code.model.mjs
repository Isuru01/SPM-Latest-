import { Schema, SchemaType, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const CodeSchema = new Schema({
  key: {
    type: String,
    default: () => uuidv4(),
  },
  assigment: { type: Schema.Types.ObjectId, ref: "Assigment" },
  createdAt: {
    type: String,
    default: () => dayjs().format(),
  },
  user: {
    type: String,
  },
  code: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
  },
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

const CodeModel = model("Code", CodeSchema);
export default CodeModel;
