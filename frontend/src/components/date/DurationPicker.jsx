import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import dayjs from "dayjs";

const DurationPicker = ({ value, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    // onChange((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
  };

  console.log(dayjs().format());

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {/* days */}
      <TextField
        select
        name="days"
        sx={{ width: "100px" }}
        label="Days"
        value={value?.days}
        onChange={handleChange}
        variant="outlined"
      >
        {[...Array(31).keys()].map((day) => (
          <MenuItem key={day} value={day}>
            {day}
          </MenuItem>
        ))}
      </TextField>

      {/* hours */}
      <TextField
        select
        name="hours"
        label="Hours"
        sx={{ width: "100px" }}
        value={value?.hours}
        onChange={handleChange}
        variant="outlined"
      >
        {[...Array(24).keys()].map((hour) => (
          <MenuItem key={hour} value={hour}>
            {hour}
          </MenuItem>
        ))}
      </TextField>

      {/* minutes */}
      <TextField
        select
        name="minutes"
        label="Minutes"
        sx={{ width: "100px" }}
        value={value?.minutes}
        onChange={handleChange}
        variant="outlined"
      >
        {[...Array(60).keys()].map((minute) => (
          <MenuItem key={minute} value={minute}>
            {minute}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default DurationPicker;
