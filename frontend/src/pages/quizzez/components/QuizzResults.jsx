import React from "react";
import { Box, Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loader";
import QuizzCard from "../../../components/cards/QuizzCard";
import { fetchQuizzes } from "../../../api/quizz.api.mjs";

const QuizzResults = () => {
  //fetch quizz
  const { data: quizzes, isLoading } = useQuery({
    queryFn: fetchQuizzes,
    queryKey: ["quizz"],
    onSuccess: () => {},
    onError: () => {},
  });

  if (isLoading) return <Loader />;

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",

          justifyContent: "center",
          mt: 2,
          gap: 2,
        }}
      >
        {quizzes.map((quizz) => (
          <QuizzCard key={quizz.key} quizz={quizz} />
        ))}
      </Box>
    </Box>
  );
};

export default QuizzResults;
