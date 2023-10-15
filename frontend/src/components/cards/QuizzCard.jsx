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
import { useMutation } from "@tanstack/react-query";
import { deleteQuizz } from "../../api/quizz.api.mjs";

const QuizzCard = ({ quizz, type }) => {
  const naviagte = useNavigate();

  console.log(quizz);

  const { _id, title, description, key } = quizz;

  const handleNavigate = (qid, title) => {
    // naviagte(`/quizzes/${qid}?=${qid}?title=${title}`);
    naviagte(`/quizz/${_id}`);
  };

  const handleEdit = () => {
    naviagte(`edit/${_id}`);
  };

  const mutation = useMutation({
    mutationFn: deleteQuizz,
    onSuccess: () => {},
    onError: () => {},
  });

  const handleDelete = () => {
    mutation.mutateAsync(_id);
  };

  console.log(quizz);

  return (
    <Card
      sx={{
        minWidth: 500,
        maxWidth: 500,
        p: 2,
        borderRadius: 0,
        border: "1px solid #d3dce6",
        position: "relative",
        top: 0,
        pointer: "cursor",
        transition: "top 0.5s ease, background 0.5s ease",
        "&:hover": {
          top: -10,
          background:
            "linear-gradient(0deg, rgba(197,195,244,1) 5%, rgba(136,140,255,0.0984768907563025) 40%)",
          border: undefined,
        },
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
          gap: 1,
          alignSelf: "right",
        }}
      >
        {type === "instructor" && (
          <Button variant="contained" onClick={handleEdit}>
            Edit
          </Button>
        )}

        {type === "instructor" && (
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        )}

        <Button
          variant="outlined"
          sx={{ ml: "auto" }}
          onClick={() => handleNavigate(key, title)}
        >
          View
        </Button>
      </Box>
    </Card>
  );
};

export default QuizzCard;
