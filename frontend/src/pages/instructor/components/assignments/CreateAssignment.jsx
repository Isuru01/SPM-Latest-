import React, { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";

import AssignmentForm from "../../../../components/form/AssignmentForm";
import TaskForm from "../../../../components/form/TaskForm";
import { createAssigment } from "../../../../api/assigment.api.mjs";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const steps = ["Create Assignment", "Create Task"];

const CreateAssignment = () => {
  const navigate = useNavigate();

  const [assigment, setAssigment] = useState({
    enrollKey: "",
    title: "",
    group: "",
    description: "",
    start: "",
    end: "",
    duration: "",
  });

  const mutation = useMutation({
    mutationFn: createAssigment,
    onSuccess: (data) => {
      navigate(`workspace/${data._id}`);
    },
    onError: () => {},
  });

  const handleSubmit = () => {
    mutation.mutateAsync(assigment);
  };

  return (
    <Box sx={{ border: "1px solid #d3dce6", p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Create Assignment Form
      </Typography>

      <AssignmentForm assigment={assigment} setAssigment={setAssigment} />

      <Box sx={{ mt: 2 }}>
        <Button variant="outlined">Cancel</Button>
        <Button sx={{ ml: 1 }} variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CreateAssignment;
