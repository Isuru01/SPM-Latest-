import React from "react";
import { Box, Container } from "@mui/material";
import OptionCard from "../../../components/cards/OptionCard";
import c1 from "../../../assets/c1.png";
import c2 from "../../../assets/c2.png";
import c3 from "../../../assets/c3.png";
import c4 from "../../../assets/c4.png";
import c5 from "../../../assets/c5.png";

const options = [
  { title: "Code Editor", link: "/editor", image: c1 },
  { title: "Assigments", link: "/assignments", image: c2 },
  { title: "Quizz", link: "/quizzes", image: c3 },
  { title: "Chat Bot", link: "", image: c4 },
  { title: "Instrcutors", link: "/instructor/overview", image: c5 },
];

const HomeOption = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", p: 2, gap: 2 }}>
        {options.map((option, index) => (
          <OptionCard key={index} option={option} />
        ))}
      </Box>
    </Box>
  );
};

export default HomeOption;
