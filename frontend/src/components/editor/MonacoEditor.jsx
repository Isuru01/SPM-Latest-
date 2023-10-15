import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ReactDOM from "react-dom";
import axios from "axios";
import Editor from "@monaco-editor/react";
import ChatWindow from "../ChatWindow";
import { useMutation } from "@tanstack/react-query";
import { compile } from "../../api/compile.api.mjs";

const MonacoEditor = ({ setAnswer, value }) => {
  const [code, setCode] = useState(value);
  const [output, setOutput] = useState();
  const [theme, setTheme] = useState("light"); // Add this line

  const mutation = useMutation({
    onSuccess: (data) => {
      console.log(data);
      setOutput(data);
    },
    onError: (error) => {
      setOutput(error.response.data);
    },
    mutationFn: compile,
  });

  const handleChange = (value, event) => {
    setCode(value);
    setAnswer((prev) => ({
      ...prev,
      code: value,
    }));
  };

  const handleRun = async () => {
    mutation.mutateAsync(code);
  };

  const handleThemeChange = () => {
    // Add this function
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleRun}>
        Run
      </Button>
      <Button variant="outlined" onClick={handleThemeChange}>
        Change Theme
      </Button>
      <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
        <Box>
          <Editor
            key={theme}
            height="80vh"
            defaultLanguage="java"
            defaultValue={value}
            theme={theme} // Set theme here
            onChange={handleChange}
          />
        </Box>

        <Box>
          <Box sx={{ backgroundColor: "#002B36", height: "80vh", p: 2 }}>
            <Typography sx={{ color: "#FFFFFF" }} component="div">
              {output}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MonacoEditor;
