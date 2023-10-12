import { useParams } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
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

function Dashboard() {
  let { type, action } = useParams();

  return (
    <Box>
      <NavBar />

      <Box sx={{ display: "flex" }}>
        <Box sx={{ flexShrink: 0, borderRight: "1px solid #d3dce6", mr: 2 }}>
          <SideNav />
        </Box>

        <Box sx={{ maxHeight: "90vh", overflow: "auto" }}>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/assignment/*" element={<Assignments />} />
            <Route path="labs" element={<Labs />} />
            <Route path="quizz" element={<Quizz />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
