import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import TextEditor from "../../../../../components/editor/TextEditor";
import { useQuery } from "@tanstack/react-query";
import { fetchQuizzes } from "../../../../../api/quizz.api.mjs";
import QuizzCard from "../../../../../components/cards/QuizzCard";

const OverviewQuizz = () => {
  const { isLoading, data } = useQuery({
    queryFn: fetchQuizzes,
    queryKey: ["quizz"],
    onSuccess: () => {},
    onError: () => {},
  });

  if (isLoading) return <div>Loading</div>;

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {data.map((quizz) => (
        <QuizzCard key={quizz.key} quizz={quizz} />
      ))}
    </Box>
  );
};

export default OverviewQuizz;
