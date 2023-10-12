import React from "react";
import { Box, Button, TextField, Chip } from "@mui/material";

const Search = () => {
  return (
    <Box sx={{ m: "auto", maxWidth: "1000px" }}>
      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField fullWidth />
        <Button sx={{ width: 200 }} variant="contained">
          Search
        </Button>
      </Box>

      <Box sx={{ mt: 2 }}>
        {[
          { option: "All", link: "" },
          { option: "Lab", link: "" },
          { option: "Assignment", link: "" },
        ].map((option, index) => (
          <Chip
            sx={{ cursor: "pointer", borderRadius: 0, p: 2, mr: 1 }}
            label={option.option}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Search;
