import { useState } from "react";

import { Button, Box, Typography } from "@mui/material";
import { Editor } from "@monaco-editor/react";

const Code = ({ onSave, code }) => {
  const [editorValue, setEditorValue] = useState(code);

  return (
    <Box>
      <Box style={{ border: "1px solid #d3dce6" }}>
        <Editor
          width="50vw"
          height="80vh"
          defaultLanguage="java"
          defaultValue="// some comment"
          onChange={(value) => setEditorValue(value)}
        />
      </Box>

      <Button
        sx={{ width: 200 }}
        variant="outlined"
        onClick={() => {
          onSave("code", editorValue);
        }}
      >
        Save Code
      </Button>
    </Box>
  );
};

export default Code;
