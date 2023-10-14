import React, { createContext, useState } from "react";
import { useContext } from "react";

export const QuizzContext = createContext();

const CreateQuizzProvider = ({ children }) => {
  //quizz
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

  //context states
  const value = {
    quizz,
    setQuizz,
    question,
    setQuestion,
    answer,
    setAnswer,
  };

  return (
    <QuizzContext.Provider value={value}>{children}</QuizzContext.Provider>
  );
};

export { CreateQuizzProvider };
