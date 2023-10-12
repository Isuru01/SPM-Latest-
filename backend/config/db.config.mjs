import mongoose from "mongoose";

export async function connectDB() {
  const uri = `mongodb+srv://abcduser:abcd123@clusterrootcode.3rawc27.mongodb.net/`;
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(`Atlas Server Connection Error ${err}`);
  }
}
