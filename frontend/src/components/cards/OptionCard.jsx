import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const OptionCard = ({ option }) => {
  const { title, link, image } = option;

  const naviagte = useNavigate();

  const handleClick = () => {
    naviagte(link);
  };

  return (
    <Card
      sx={{
        minWidth: 345,
        maxWidth: 345,
        borderRadius: 0,
        boxShadow: "2px",
        border: "1px solid #d3dce6",
        p: 1,
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
          gap: 2,
        }}
      >
        <img style={{ width: "4rem" }} src={image} />
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </Box>

      <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, earum
        sapiente numquam quaerat temporibus ratione recusandae dolorum
      </Typography>
    </Card>
  );
};
export default OptionCard;
