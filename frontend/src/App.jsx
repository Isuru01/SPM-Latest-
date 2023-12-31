import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogRoute from "./privateroute/LogROute";
import {
  Home,
  Assignments,
  InstructorDashboard,
  Assignment,
  SignIn,
  SignUp,
} from "./pages/index.mjs";
import "./App.css";
import Quizzes from "./pages/quizzez/Quizzez";
import Quizz from "./pages/quizz/Quizz";
import Chatbot from "./pages/chtBot/ChatBot";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <LogRoute>
              <Home />
            </LogRoute>
          }
        />
        <Route
          path="/assignments/:id"
          element={
            <LogRoute>
              <Assignment />
            </LogRoute>
          }
        />
        <Route
          path="/assignments"
          element={
            <LogRoute>
              <Assignments />
            </LogRoute>
          }
        />
        <Route
          path="/instructor/*"
          element={
            <LogRoute>
              <InstructorDashboard />
            </LogRoute>
          }
        />

        <Route
          path="/quizzes"
          element={
            <LogRoute>
              <Quizzes />
            </LogRoute>
          }
        />

        <Route
          path="/quizz/:id"
          element={
            <LogRoute>
              <Quizz />
            </LogRoute>
          }
        />

        <Route
          path="/quizz/:id"
          element={
            <LogRoute>
              <Quizz />
            </LogRoute>
          }
        />

        <Route
          path="/chtbot"
          element={
            <LogRoute>
              <Chatbot />
            </LogRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
