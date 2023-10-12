import React, { useContext, useState } from "react";
import { Box, Button, TextField, Stack } from "@mui/material";

const TaskForm = () => {
  const [task, setTask] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // set the task
    setTask((prev) => ({
      ...prev,
      [name]: value,
      assigment,
      assigmentRef: aid,
    }));
  };

  return (
    <form>
      <Stack spacing={2}>
        {/* description */}
        <TextField
          name="task"
          fullWidth
          label="Title"
          variant="outlined"
          value={task?.task}
          onChange={handleChange}
        />

        {/* description */}
        <TextField
          name="description"
          fullWidth
          rows={5}
          multiline
          label="Description"
          variant="outlined"
          value={task?.description}
          onChange={handleChange}
        />
        {/* submit the task */}
      </Stack>
    </form>
  );
};

export default TaskForm;
