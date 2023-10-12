import React from "react";
import { Box, Toolbar } from "@mui/material";
import NavBar from "../../components/nav/NavBar";
import HomeOption from "./components/HomOptions";

const Home = () => {
  return (
    <>
      <NavBar />
      <Toolbar />
      <Box sx={{ minHeight: "80vh" }}>
        <HomeOption />
      </Box>
    </>
  );
};

export default Home;
