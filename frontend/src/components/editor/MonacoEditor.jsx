import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";
import ChatWindow from "../ChatWindow";

const MonacoEditor = ({ setAnswer, value }) => {
  const handleChange = (value, event) => {
    setAnswer((prev) => ({
      ...prev,
      code: value,
    }));
  };

  return (
    <>
      <Editor
        height="80vh"
        defaultLanguage="java"
        defaultValue={value}
        onChange={handleChange}
      />
    </>
  );
};

export default MonacoEditor;
