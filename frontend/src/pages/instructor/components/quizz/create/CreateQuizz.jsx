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
import Question from "../../../../../components/Question/Question";
import TextEditor from "../../../../../components/editor/TextEditor";
import { updateQuizz } from "../../../../../api/quizz.api.mjs";
import { useMutation } from "@tanstack/react-query";

const CreateQuizz = () => {
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

  const mutation = useMutation(updateQuizz, {
    onSuccess: () => {},
    onError: () => {},
  });

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

      <form>
        <Stack spacing={2} sx={{ border: "1px solid #d3dce6", p: 2, mb: 2 }}>
          <Typography variant="h6">Add Question</Typography>

          <TextField
            label="Question"
            name="question"
            onChange={(e) => handleQuestion(e.target.name, e.target.value)}
          />

          <Box>
            <TextField
              label="Answer"
              value={answer.answer}
              fullWidth
              size="small"
              name="answer"
              onChange={handleAnswer}
            />

            <Button sx={{ mt: 2 }} variant="outlined" onClick={submitAnswer}>
              Add An Answer
            </Button>
          </Box>

          {question.answers.map((answer, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={answer.isAnswer}
                  onChange={(event) => handleCheckboxChange(event, index)}
                />
              }
              label={answer.answer}
            />
          ))}

          {/* <TextEditor instruction="solution" onSave={handleQuestion} /> */}
          <TextField
            value={question.solution}
            label="Solution"
            name="solution"
            onChange={(e) => handleQuestion(e.target.name, e.target.value)}
          />
          {/* <TextField /> */}

          <Button variant="contained" onClick={handleSubmit}>
            Add Question
          </Button>

          {/* <SaveQuizz /> */}
        </Stack>
      </form>

      <Box sx={{ border: "1px solid #d3dce6", p: 2, mb: 2 }}>
        {quizz.questions.map((question) => (
          <Question question={question} />
        ))}
      </Box>

      <Button fullWidth type="submit" variant="contained" onClick={handleSave}>
        Create Quizz
      </Button>
    </Box>
  );
};

export default CreateQuizz;
