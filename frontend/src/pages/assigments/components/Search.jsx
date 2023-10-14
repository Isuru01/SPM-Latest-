import { useState } from "react";
import { Box, Button, TextField, Chip, colors } from "@mui/material";

const Search = ({ searh, setSearch }) => {
  const [text, setText] = useState("");

  return (
    <Box sx={{ m: "auto", maxWidth: "1000px" }}>
      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          sx={{ backgroundColor: "#e8f0f7" }}
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          onClick={() => setSearch(text)}
          sx={{ width: 200, backgroundColor: "#0e4c7d" }}
          variant="contained"
        >
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
            variant="outlined"
            sx={{
              cursor: "pointer",
              mr: 2,
              pl: 2,
              pr: 2,
              backgroundColor: colors.blue[100],
            }}
            label={option.option}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Search;
