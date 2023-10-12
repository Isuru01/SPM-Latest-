import React from "react";
import { Box, Card, CardActionArea, Typography, Button } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useNavigate } from "react-router-dom";

const CardBtn = ({ title, link }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${link}`);
  };

  return (
    <Button sx={{ varinat: "contained" }} onClick={handleNavigate}>
      Create Assignment
    </Button>
  );
};

export default CardBtn;
