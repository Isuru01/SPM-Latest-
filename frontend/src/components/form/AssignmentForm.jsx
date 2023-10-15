import React, { useContext, useState } from "react";
import {
  Box,
  TextField,
  Autocomplete,
  Stack,
  FormLabel,
  FormControl,
  Typography,
} from "@mui/material";
import DurationPicker from "../date/DurationPicker";
import dayjs from "dayjs";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const AssignmentForm = ({ assigment, setAssigment, errors }) => {
  const handleChange = (name, value) => {
    setAssigment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box>
      <form>
        <Stack spacing={2}>
          {/* assigment data */}
          <Box sx={{ border: "1px solid #d3dce6", p: 2, borderRadius: 1 }}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Assignment Details
            </Typography>

            <Stack spacing={2}>
              <Box sx={{ display: "flex", gap: 2, width: "1000px" }}>
                {/* title */}
                <TextField
                  name="title"
                  fullWidth
                  label="Title"
                  variant="outlined"
                  value={assigment?.title || ""}
                  error={!!errors.title}
                  helperText={errors.title}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />

                {/* enrollKey */}
                <TextField
                  name="enrollKey"
                  fullWidth
                  label="Enroll Key"
                  variant="outlined"
                  value={assigment?.enrollKey || ""}
                  error={!!errors.enrollKey}
                  helperText={errors.enrollKey}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                {/* group */}
                <Autocomplete
                  name="group"
                  disablePortal
                  fullWidth
                  id="combo-box-demo"
                  value={groups.find(
                    (group) => group.label === assigment?.group
                  )}
                  options={groups}
                  onChange={(event, value) =>
                    handleChange("group", value.label)
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Field" />
                  )}
                  error={!!errors.group}
                  helperText={errors.group}
                />
                {/* module */}
                <Autocomplete
                  name="module"
                  disablePortal
                  fullWidth
                  id="combo-box-demo"
                  options={modules}
                  value={modules.find(
                    (module) => module.label === assigment?.module
                  )}
                  onChange={(event, value) =>
                    handleChange("module", value.label)
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Group" />
                  )}
                  error={!!errors.module}
                  helperText={errors.module}
                />
              </Box>

              {/* description */}
              <TextField
                name="description"
                fullWidth
                value={assigment?.description || ""}
                rows={5}
                multiline
                label="Description"
                variant="outlined"
                error={!!errors.description}
                helperText={errors.description}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </Stack>
          </Box>

          <Box sx={{ border: "1px solid #d3dce6", p: 2, borderRadius: 1 }}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Configure Timing
            </Typography>

            <Stack direction="row" spacing={4}>
              {/* available on */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormControl>
                  <FormLabel>Starts On</FormLabel>
                  <MobileDateTimePicker
                    onChange={(value) => handleChange("start", value)}
                    defaultValue={dayjs()}
                  />
                </FormControl>
              </LocalizationProvider>

              {/* ends on */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormControl>
                  <FormLabel>Ends On</FormLabel>
                  <MobileDateTimePicker
                    onChange={(value) => handleChange("end", value)}
                    defaultValue={dayjs()}
                  />
                </FormControl>
              </LocalizationProvider>

              {/* duration */}
              <Box>
                {/* <FormControl>
                  <FormLabel>Duration</FormLabel>
                  <DurationPicker
                    value={assigment.duration}
                    onChange={handleChange}
                  />
                </FormControl> */}
              </Box>
            </Stack>
          </Box>

          {/* assigment submit btn */}
        </Stack>
      </form>
    </Box>
  );
};

const groups = [
  { label: "Y-1 S1 Software Engineering" },
  { label: "Y-1 S2 Software Engineering" },
  { label: "Y-2 S1 Software Engineering" },
  { label: "Y-2 S2 Software Engineering" },
  { label: "Y-3 S1 Software Engineering" },
  { label: "Y-3 S2 Software Engineering" },
];

const modules = [
  { label: "SE1010" },
  { label: "SE1120" },
  { label: "SE2010" },
  { label: "SE2120" },
  { label: "SE3010" },
  { label: "SE3120" },
];

export default AssignmentForm;
