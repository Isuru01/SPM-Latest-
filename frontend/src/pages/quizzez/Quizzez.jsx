import React from "react";
import { Box, Typography } from "@mui/material";
import { fetchQuizzes } from "../../api/quizz.api.mjs";
import Loader from "../../components/common/Loader";
import QuizzResults from "./components/QuizzResults";
import NavBar from "../../components/nav/NavBar";

const Quizzes = () => {
  return (
    <Box>
      <NavBar />
      <QuizzResults />
    </Box>
  );
};

export default Quizzes;
