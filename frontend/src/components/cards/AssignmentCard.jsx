import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  duration,
  Button,
} from "@mui/material";
import { addPositionPropertiesToSections } from "@mui/x-date-pickers/internals";

const AssignmentCard = ({ assignment, type, history, link }) => {
  const naviagte = useNavigate();

  console.log(assignment);
  const { _id, key, title, group, duration } = assignment;

  const handleNavigate = (assigment, aid) => {
    const navigateLink = link ? `${link}/${aid}` : aid;

    naviagte(navigateLink);
  };

  const handleEditNavigate = (assignment, aid) => {
    naviagte(`/instructor/assignment/update/${_id}`);
  };

  return (
    <Card
      sx={{
        minWidth: 400,
        maxWidth: 500,
        p: 2,
        borderRadius: 0,
        border: "1px solid #d3dce6",
      }}
    >
      <Typography gutterBottom variant="h6" sx={{ fontSize: "1.2rem" }}>
        {title}
      </Typography>

      <Typography gutterBottom variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, earum
        sapiente numquam quaerat temporibus ratione recusandae dolorum
      </Typography>

      <Box sx={{ color: "#0556f3" }}>
        <Typography
          sx={{ mb: 2, mt: 2, fontWeight: 600 }}
          variant="subtitle2"
          component="div"
        >
          group {group ? group : "N/A"}
        </Typography>

        <Box sx={{ display: "flex" }}>
          {type === "instructor" && (
            <Button
              variant="outlined"
              onClick={() => handleEditNavigate(title, _id)}
            >
              Edit
            </Button>
          )}

          <Button
            sx={{ ml: "auto" }}
            variant="outlined"
            onClick={() => handleNavigate(title, _id)}
          >
            View
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default AssignmentCard;
