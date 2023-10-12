import React from "react";
import ReactQuill from "react-quill";
import { Box, Button } from "@mui/material";
import "react-quill/dist/quill.snow.css"; // import the styles

const TextEditor = ({ instruction, onSave }) => {
  const [value, setValue] = React.useState(instruction);

  return (
    <Box>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <Button
        sx={{ width: 200 }}
        variant="outlined"
        onClick={() => onSave("instruction", value)}
      >
        Save Instruction
      </Button>
    </Box>
  );
};

export default TextEditor;
