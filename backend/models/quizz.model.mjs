import { Schema, SchemaType, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const QuizzSchema = new Schema({
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
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  questions: {
    question: String,
    answers: [
      {
        isAnswer: Boolean,
        answer: String,
        select: {
          type: Boolean,
          default: false,
        },
      },
    ],
    solution: String,
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

const QuizzModel = model("Quizz", QuizzSchema);
export default QuizzModel;
