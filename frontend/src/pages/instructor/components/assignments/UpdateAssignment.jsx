import React, { useState } from "react";
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";

import AssignmentForm from "../../../../components/form/AssignmentForm";
import TaskForm from "../../../../components/form/TaskForm";
import {
  createAssigment,
  fetchAssigment,
  updateAssigment,
} from "../../../../api/assigment.api.mjs";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loader from "../../../Loader";

const steps = ["Create Assignment", "Create Task"];

const CreateAssignment = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id);

  const [assigment, setAssigment] = useState({
    aid: id,
    enrollKey: "",
    title: "",
    group: "",
    description: "",
    start: "",
    end: "",
    duration: "",
  });

  const { isLoading, data } = useQuery({
    queryFn: fetchAssigment,
    queryKey: ["assigment", id],
    onSuccess: (data) => {
      console.log(data);
      setAssigment({
        aid: id,
        ...data,
      });
    },
    onError: () => {},
  });

  const mutation = useMutation({
    mutationFn: updateAssigment,
    onSuccess: (data) => {
      navigate(`workspace`);
    },
    onError: () => {},
  });

  const handleSubmit = () => {
    mutation.mutateAsync(assigment);
  };

  if (isLoading) return <Loader />;

  return (
    <Box>
      <AssignmentForm assigment={assigment} setAssigment={setAssigment} />

      <Box sx={{ mt: 2 }}>
        <Button variant="outlined">Cancel</Button>
        <Button sx={{ ml: 1 }} variant="contained" onClick={handleSubmit}>
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default CreateAssignment;
