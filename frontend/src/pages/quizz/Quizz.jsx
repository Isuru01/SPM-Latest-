import { useQuery } from "@tanstack/react-query";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { fetchQuizz } from "../../api/quizz.api.mjs";
import Loader from "../../components/common/Loader";
import { useParams } from "react-router-dom";
import Question from "../../components/Question/Question";
import NavBar from "../../components/nav/NavBar";

const Quizz = () => {
  const { id } = useParams();

  const { isLoading, data: quizz } = useQuery({
    queryFn: fetchQuizz,
    queryKey: ["quizz", id],
    onSuccess: () => {},
    onError: () => {},
  });

  if (isLoading) return <Loader />;

  console.log(quizz);

  return (
    <Box>
      <NavBar />

      <Container sx={{ border: "1px solid #d3dce6", p: 7 }}>
        <Typography variant="h6">{quizz.title}</Typography>
        {quizz.questions.map((question) => (
          <Question question={question} />
        ))}
      </Container>
    </Box>
  );
};

export default Quizz;
