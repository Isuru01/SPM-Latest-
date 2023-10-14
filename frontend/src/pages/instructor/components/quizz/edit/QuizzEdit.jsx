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
import { useParams } from "react-router-dom";
import Question from "../../../../../components/Question/Question";
import TextEditor from "../../../../../components/editor/TextEditor";
import {
  fetchQuizz,
  updateQuizz,
  updateQuizzNew,
} from "../../../../../api/quizz.api.mjs";
import { useMutation, useQuery } from "@tanstack/react-query";

const QuizzEdit = () => {
  const { id } = useParams();

  const [quizz, setQuizz] = useState({
    title: "",
    description: "",
    questions: [],
  });

  const [question, setQuestion] = useState({
    question: "",
    answers: [], // Initialize answers as an empty array
    solution: "",
  });

  const [answer, setAnswer] = useState({
    isAnswer: false,
    answer: "",
    select: false,
  });

  // console.log(quizz);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setQuizz((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //handle the answer
  const handleAnswer = (e) => {
    const { name, value } = e.target;

    setAnswer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //submit the answer
  const submitAnswer = () => {
    setQuestion((prev) => ({
      ...prev,
      answers: [...prev.answers, answer],
    }));

    setAnswer({
      isAnswer: false,
      answer: "",
    });
  };

  //handle QUestion
  const handleQuestion = (name, value) => {
    setQuestion((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event, index) => {
    // Get the current value of the checked property
    const checked = event.target.checked;

    // Update the isAnswer property of the selected answer
    setQuestion((prev) => {
      const updatedAnswers = [...prev.answers];
      updatedAnswers[index].isAnswer = checked;
      return {
        ...prev,
        answers: updatedAnswers,
      };
    });
  };

  const handleSubmit = () => {
    setQuizz((prev) => ({
      ...prev,
      questions: [...prev.questions, question],
    }));

    setQuestion({
      question: "",
      answers: [],
      solution: "",
    });
  };

  const mutation = useMutation(updateQuizzNew, {
    onSuccess: () => {},
    onError: () => {},
  });

  const { isLoading, data } = useQuery({
    queryFn: fetchQuizz,
    queryKey: ["quizz", id],
    onSuccess: (data) => {
      setQuizz({
        id: id,
        title: data.title,
        description: data.description,
      });
    },
    onError: () => {},
  });

  if (isLoading) return <div>Loading</div>;

  console.log(quizz);

  const handleSave = (e) => {
    e.preventDefault();

    mutation.mutateAsync(quizz);
  };
  return (
    <Box sx={{ border: "1px solid #d3dce6", p: 2, mb: 2 }}>
      <form>
        <Stack sx={{ border: "1px solid #d3dce6", p: 2, mb: 2 }} spacing={2}>
          <Typography variant="h6">Create Quizz</Typography>

          {/* description */}
          <TextField
            name="title"
            fullWidth
            label="Title"
            variant="outlined"
            value={quizz.title}
            onChange={handleChange}
          />

          {/* description */}
          <TextField
            name="description"
            fullWidth
            rows={5}
            multiline
            label="Description"
            variant="outlined"
            value={quizz.description}
            onChange={handleChange}
          />
          {/* submit the task */}
        </Stack>
      </form>

      {/* <Box sx={{ border: "1px solid #d3dce6", p: 2, mb: 2 }}>
        {quizz.questions.map((question) => (
          <Question question={question} />
        ))}
      </Box> */}

      <Button fullWidth type="submit" variant="contained" onClick={handleSave}>
        Update Quizz
      </Button>
    </Box>
  );
};

export default QuizzEdit;
