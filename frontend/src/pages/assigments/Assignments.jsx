import React, { useState } from "react";
import NavBar from "../../components/nav/NavBar";
import { Toolbar, Box } from "@mui/material";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

const Assignments = () => {
  const [search, setSearch] = useState();

  return (
    <>
      <NavBar />
      <Box
        sx={{
          pt: 10,
          pb: 2,
          background: "linear-gradient(to right, #63a6e2, #1769aa)",
        }}
      >
        <Search search={search} setSearch={setSearch} />
      </Box>

      <SearchResults search={search} />
    </>
  );
};

export default Assignments;
