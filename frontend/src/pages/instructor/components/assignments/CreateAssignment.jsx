import React, { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import Notify from "../../../../components/alert/Notify";
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

  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: createAssigment, // Corrected typo
    onSuccess: (data) => {
      navigate(`workspace/${data._id}`);
      setOpen(open);
    },
    onError: () => {},
  });

  const handleSubmit = () => {
    const newErrors = {};

    if (!assigment.title) {
      newErrors.title = "Title is required";
    }

    if (!assigment.enrollKey) {
      newErrors.enrollKey = "Enroll Key is required";
    }

    if (!assigment.group) {
      newErrors.group = "Group is required";
    }

    if (!assigment.description) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);

    console.log(Object.keys(newErrors));
    if (Object.keys(newErrors).length === 0) {
      mutation.mutateAsync(assigment);
    }
  };

  return (
    <>
      <Notify
        msg="Assignment Successfully Create"
        open={open}
        setOpen={setOpen}
      />

      <Box sx={{ border: "1px solid #d3dce6", p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Create Assignment Form
        </Typography>

        <AssignmentForm
          assigment={assigment}
          setAssigment={setAssigment}
          errors={errors}
        />

        <Box sx={{ mt: 2 }}>
          <Button variant="outlined">Cancel</Button>
          <Button sx={{ ml: 1 }} variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreateAssignment;
