import React from "react";
import { Box, Typography, Button } from "@mui/material";

import { useParams, Routes, Route, useNavigate } from "react-router-dom";

import NoteAddIcon from "@mui/icons-material/NoteAdd";
import OverviewQuizz from "./overview/OverviewQuizz";

import CreateQuizz from "./create/CreateQuizz";

const Quizz = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/instructor/quizz/create`);
  };

  return (
    <Box sx={{ pt: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          justifyContent: "space-between",
          borderTop: "1px solid #d3dce6",
          borderBottom: "1px solid #d3dce6",
          mt: 2,
          mb: 2,
        }}
      >
        <Typography variant="h5" sx={{ ml: 4 }}>
          Create Quizz
        </Typography>

        <Button
          onClick={handleNavigate}
          size="large"
          sx={{ borderRadius: 0 }}
          variant="contained"
          endIcon={<NoteAddIcon />}
        >
          Create Quizz
        </Button>
      </Box>

      <Box>
        <Routes>
          <Route path="/" element={<OverviewQuizz />} />
          <Route path="/create" element={<CreateQuizz />} />
        </Routes>
      </Box>

      {/* 
      <Outlet /> */}
    </Box>
  );
};

export default Quizz;
