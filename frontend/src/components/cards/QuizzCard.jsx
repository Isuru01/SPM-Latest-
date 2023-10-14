import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  duration,
  Button,
} from "@mui/material";
import { addPositionPropertiesToSections } from "@mui/x-date-pickers/internals";

const QuizzCard = ({ quizz }) => {
  const naviagte = useNavigate();

  console.log(quizz);

  const { title, description, key } = quizz;

  const handleNavigate = (qid, title) => {
    // naviagte(`/quizzes/${qid}?=${qid}?title=${title}`);
  };

  return (
    <Card
      sx={{
        minWidth: 400,
        maxWidth: 500,
        p: 2,
        borderRadius: 0,
        border: "1px solid #d3dce6",
      }}
    >
      <Typography gutterBottom variant="h6" sx={{ fontSize: "1.2rem" }}>
        {title}
      </Typography>

      <Typography gutterBottom variant="body2" color="text.secondary">
        {description}
      </Typography>

      <Typography
        sx={{ mb: 2, mt: 2 }}
        variant="h6"
        component="div"
      ></Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button variant="outlined" onClick={() => handleNavigate(key, title)}>
          Visit
        </Button>
      </Box>
    </Card>
  );
};

export default QuizzCard;
