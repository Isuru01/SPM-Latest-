import React from "react";
import { Box, Container, Toolbar, Typography } from "@mui/material";
import NavBar from "../../components/nav/NavBar";
import HomeOption from "./components/HomOptions";
import MonacoEditor from "../../components/editor/MonacoEditor";

const Home = () => {
  return (
    <>
      <NavBar />
      <Toolbar />
      <Box sx={{ minHeight: "80vh" }}>
        <Container>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              mt: 2,
              textAlign: "left",
              fontWeight: 600,
              color: "#3A3B3C",
            }}
          >
            IIPLE JAVA CODING ENVIRONMENT
          </Typography>
          <HomeOption />
        </Container>

        <Container sx={{ pb: 10 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              mt: 2,
              textAlign: "center",
              fontWeight: 600,
              color: "#3A3B3C",
            }}
          >
            IIPLE JAVA CODING ENVIRONMENT
          </Typography>

          <MonacoEditor />
        </Container>
      </Box>
    </>
  );
};

export default Home;
