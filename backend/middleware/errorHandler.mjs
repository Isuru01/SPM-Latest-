export default (err, req, res, next) => {
  console.log(err);

  switch (err.name) {
    case "MongoServerError":
      if (err.code === 11000) {
        // Handle duplicate key errors
        res.status(400).json({ message: "A duplicate key error occurred" });
      } else {
        // Handle other MongoDB errors
        res.status(500).json({ message: "A database error occurred" });
      }
      break;
    case "ValidationError":
      // Handle Mongoose validation errors
      res.status(400).json({ message: "A validation error cocured" });
      break;
    case "SyntaxError":
      // Handle syntax errors
      res.status(400).json({ message: "A syntax error occurred" });
      break;
    case "TypeError":
      // Handle type errors
      res.status(400).json({ message: "A type error occurred" });
      break;
    case "ReferenceError":
      // Handle reference errors
      res.status(400).json({ message: "A reference error occurred" });
      break;
    case "RangeError":
      // Handle range errors
      res.status(400).json({ message: "A range error occurred" });
      break;
    case "URIError":
      // Handle URI errors
      res.status(400).json({ message: "A URI error occurred" });
      break;
    default:
      // Handle other types of errors
      res.status(500).json({ message: "An unknown error occurred" });
  }
};
