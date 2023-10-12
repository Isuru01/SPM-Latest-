import { TextField, Box } from "@mui/material";
import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import HelpIcon from "@mui/icons-material/Help";

const ChatWindow = () => {
  return (
    <Box
      sx={{
        borderTop: "2px solid grey",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 5,
        gap: 2,
      }}
    >
      <TextField label="Need help?" sx={{ width: "800px" }} />
      <HelpIcon sx={{ fontSize: "2.5rem", color: "#0078d7" }} />
    </Box>
  );
};

export default ChatWindow;
