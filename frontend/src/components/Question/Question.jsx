import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  Radio,
  Button,
  Paper,
} from "@mui/material";

const Question = ({ question }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Determine if multiple answers are allowed
  const multipleAnswers =
    question.answers.filter((answer) => answer.isAnswer).length > 1;

  // Handle changes to the selected answers
  const handleAnswerChange = (event) => {
    const value = event.target.value;
    if (multipleAnswers) {
      setSelectedAnswers((prevSelectedAnswers) =>
        prevSelectedAnswers.includes(value)
          ? prevSelectedAnswers.filter((answer) => answer !== value)
          : [...prevSelectedAnswers, value]
      );
    } else {
      setSelectedAnswers([value]);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Compare the selected answers with the correct answers
    const correctAnswers = question.answers
      .filter((answer) => answer.isAnswer)
      .map((answer) => answer.answer);

    setIsCorrect(
      selectedAnswers.length === correctAnswers.length &&
        selectedAnswers.every((answer) => correctAnswers.includes(answer))
    );

    setSubmitted(true);
  };

  return (
    <Box
      component={Paper}
      elevation={4}
      sx={{
        p: 2,
        mb: 4,
        backgroundColor: submitted
          ? isCorrect
            ? "lightgreen"
            : "lightcoral"
          : "white",
      }}
      onSubmit={handleSubmit}
    >
      <Box dangerouslySetInnerHTML={{ __html: question.question }} />

      <Box sx={{ display: "flex", flexDirection: "column", m: 4 }}>
        {question.answers.map((answer, index) => (
          <FormControlLabel
            key={index}
            control={
              multipleAnswers ? (
                <Checkbox
                  checked={selectedAnswers.includes(answer.answer)}
                  onChange={handleAnswerChange}
                  value={answer.answer}
                />
              ) : (
                <Radio
                  checked={selectedAnswers.includes(answer.answer)}
                  onChange={handleAnswerChange}
                  value={answer.answer}
                />
              )
            }
            label={answer.answer}
          />
        ))}
      </Box>

      <Button onClick={handleSubmit} variant="outlined">
        Check Answer
      </Button>

      {submitted && (
        <Box dangerouslySetInnerHTML={{ __html: question.solution }} />
      )}
    </Box>
  );
};

export default Question;
