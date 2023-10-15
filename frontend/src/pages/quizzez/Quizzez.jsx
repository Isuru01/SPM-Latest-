import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { fetchQuizzes } from "../../api/quizz.api.mjs";
import Loader from "../../components/common/Loader";
import QuizzResults from "./components/QuizzResults";
import NavBar from "../../components/nav/NavBar";
import Search from "./components/Search";

const Quizzes = () => {
  const [search, setSearch] = useState();

  return (
    <Box>
      <NavBar />

      <Box
        sx={{
          pt: 10,
          pb: 2,
          background: "linear-gradient(to right, #63a6e2, #1769aa)",
        }}
      >
        <Search search={search} setSearch={setSearch} />
      </Box>
      <QuizzResults />
    </Box>
  );
};

export default Quizzes;
