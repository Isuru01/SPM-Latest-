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
  Chatbot
} from "./pages/index.mjs";
import "./App.css";

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
          path="/chtbot"
          element={
            <LogRoute>
              <Chatbot/>
            </LogRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
