import { useNavigate, useParams } from "react-router-dom";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Stack,
// } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import {
  Overview,
  Assignments,
  CreateAssignment,
  UpdateAssignment,
  Labs,
  Quizz,
  SideNav,
} from "./components/assignments/index.mjs";
import NavBar from "../../components/nav/NavBar";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

const Dashboard = () => {
  const navigate = useNavigate();

  const homeNavigate = () => {
    navigate("/");
  };

  let { type, action } = useParams();

  return (
    <Box
      sx={{
        display: "flex",
        background:
          "linear-gradient(0deg, rgba(197,195,244,1) 5%, rgba(136,140,255,0.0984768907563025) 40%)",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{ cursor: "pointer" }}
            component="div"
            onClick={homeNavigate}
          >
            IIPLE
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <SideNav />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Box component="main" sx={{ flexGrow: 1, overflow: "auto" }}>
          <Routes>
            <Route path="/" element={<Assignments />} />
            <Route path="/quizz/*" element={<Quizz />} />
            <Route path="/assignment/*" element={<Assignments />} />
            <Route path="labs" element={<Labs />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
