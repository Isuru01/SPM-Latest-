import React from "react";
import NavBar from "../../components/nav/NavBar";
import { Toolbar, Box } from "@mui/material";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

const Assignments = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ pt: 10, pb: 2, bgcolor: "#FFFFFF" }}>
        <Search />
      </Box>

      <SearchResults />
    </>
  );
};

export default Assignments;
