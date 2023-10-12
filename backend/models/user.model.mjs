import { Schema, SchemaType, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const UserSchema = new Schema({
  key: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  save: [{ type: String }],
});

UserSchema.pre("save", function (next) {
  if (!this.key) {
    this.key = uuidv4();
  }
  next();
});

const UserModel = model("User", UserSchema);
export default UserModel;
