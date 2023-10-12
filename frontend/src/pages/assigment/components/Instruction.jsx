import React from "react";
import { Box } from "@mui/material";

const Instruction = ({ instruction }) => {
  return (
    <Box
      sx={{ margin: 2 }}
      dangerouslySetInnerHTML={{ __html: instruction }}
    ></Box>
  );
};

export default Instruction;
