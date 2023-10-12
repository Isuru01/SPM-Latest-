import React from "react";
import { Box, Typography, Button } from "@mui/material";

import { useParams, Routes, Route, useNavigate } from "react-router-dom";
import CreateAssignment from "./CreateAssignment";
import UpdateAssignment from "./UpdateAssignment";
import OverviewAssignment from "./OverviewAssignment";
import Workspace from "./Workspace";

import NoteAddIcon from "@mui/icons-material/NoteAdd";
import AssigmentData from "./AssigmentData";

const Assignments = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/instructor/assignment/create`);
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
          Assignment
        </Typography>

        <Button
          onClick={handleNavigate}
          size="large"
          sx={{ borderRadius: 0 }}
          variant="contained"
          endIcon={<NoteAddIcon />}
        >
          Create Assignment
        </Button>
      </Box>

      <Box>
        <Routes>
          <Route path="/" element={<OverviewAssignment />} />
          <Route path="/create" element={<CreateAssignment />} />
          <Route path="/:id" element={<AssigmentData />} />
          <Route path="/create/workspace/:id" element={<Workspace />} />
          <Route path="/update/:id" element={<UpdateAssignment />} />
          <Route path="/update/:id/workspace" element={<Workspace />} />
        </Routes>
      </Box>

      {/* 
      <Outlet /> */}
    </Box>
  );
};

export default Assignments;
