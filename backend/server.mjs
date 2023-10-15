import dotenv from "dotenv";
dotenv.config();
import { exec } from "child_process";
import { writeFile } from "fs";
import dayjs from "dayjs";
import bodyParser from "body-parser";

import { connectDB } from "./config/db.config.mjs";
import authenticate from "./middleware/authenticate.mjs";
import errorHandler from "./middleware/errorHandler.mjs";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import router_assigment from "./routes/assigment.router.mjs";
import router_task from "./routes/task.router.mjs";
import router_search from "./routes/search.router.mjs";
import router_user from "./routes/user.router.mjs";
import router_auth from "./routes/auth.router.mjs";
import router_quizz from "./routes/quizz.router.mjs";

const app = express();

//middlewares
app.use(
  cors({
    origin: process.env.HOST_URL, // replace with the URL of your client
    credentials: true,
  })
); //cross orgin resource sharing for giving access to our api

const { json, urlencoded } = express;

app.use(morgan("dev"));

app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(cookieParser());
app.use(urlencoded({ extended: true }));

// authenticate the using middleware and cookie befor use uncomment
app.use("/api/auth", router_auth);
app.use(authenticate);
app.get("/api/authenticate", (req, res, next) => {
  res.status(200).json({ message: "" });
  next();
});

app.use("/api/user", router_user);
app.use("/api/quizz", router_quizz);
app.use("/api/assigment", router_assigment);
app.use("/api/task", router_task);
app.use("/api/search", router_search);

app.post("/api/compile", (req, res) => {
  const javaCode = req.body.code;

  console.log(javaCode);

  // Write the code to a .java file
  writeFile("Main.java", javaCode, (err) => {
    if (err) throw err;
    console.log("Java code has been written to Main.java");

    // Compile and run the .java file
    exec("javac Main.java && java Main", (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return res.status(500).send(error.message);
      }

      // Send the output of the Java program back as the response
      res.send(stdout ? stdout.toString() : stderr.toString());
    });
  });
});

app.use(errorHandler);

// cron.schedule("0 12 * * *", scheduleShuttle);

const startServer = async () => {
  try {
    app.listen(8070, () => {
      connectDB();
      console.log("Server started on port http://localhost:8070");
    });
  } catch (err) {
    console.log(err);
  }
};

export { startServer };
