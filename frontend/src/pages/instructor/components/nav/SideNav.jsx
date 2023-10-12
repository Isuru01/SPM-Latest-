import React, { useState } from "react";
import {
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const navWidth = 200;

  return (
    <Stack sx={{ width: navWidth }}>
      <Toolbar />

      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            navigate(`/instructor`);
            setSelected("overview");
          }}
          sx={{
            backgroundColor:
              selected === "overview" ? "lightblue" : "transparent",
            color: selected === "overview" ? "blue" : "black",
          }}
        >
          <ListItemText primary="overview" />
        </ListItemButton>
      </ListItem>

      {
        <List>
          {["assignment", "labs", "quizz"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(`/instructor/${text}`);
                  setSelected(text);
                }}
                sx={{
                  backgroundColor:
                    selected === text ? "lightblue" : "transparent",
                  color: selected === text ? "blue" : "black",
                }}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      }
    </Stack>
  );
};

export default SideNav;
