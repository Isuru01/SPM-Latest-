import User from "../models/user.model.mjs";
import jwt from "jsonwebtoken";

const signUp = async (req, res, next) => {
  const user = req.body;

  try {
    const response = await User.create(user);

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(400).json({ message: "Unknown error occurred" });
    }
  } catch (error) {
    switch (error.name) {
      case "MongoServerError":
        if (error.code === 11000) {
          // Handle duplicate key errors
          res.status(409).json({ message: "Email already in use" });
        } else {
          // Handle other MongoDB errors
          res.status(500).json({ message: "A database error occurred" });
        }
        break;
      default:
        next(error);
    }

    next(error);
  }
};

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const response = await User.findOne({ email, password }, { save: 0 });

    const token = jwt.sign({ user: response }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    if (response) {
      const token = jwt.sign({ user: response }, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          sameSite: "lax",
        })
        .json({ token });
    } else {
      res.status(404).json({ msg: "password or username incorrecet" });
    }

    // console.log(response);

    // res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const logOut = async (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out" });
};

export { signIn, signUp, logOut };
