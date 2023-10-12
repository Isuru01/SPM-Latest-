import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CardBtn from "../../../../buttons/CardBtn";
import { useQuery } from "@tanstack/react-query";
import { fetchAssigments } from "../../../../api/assigment.api.mjs";
import AssignmentCard from "../../../../components/cards/AssignmentCard";
import Loader from "../../../../components/common/Loader";
import { useNavigate } from "react-router-dom";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

const OverviewAssignment = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/instructor/assignment/create`);
  };

  const { isLoading, data: assigmentsData } = useQuery({
    queryKey: ["assigment"],
    queryFn: fetchAssigments,
    onSuccess: () => {},
    onError: () => {},
  });

  if (isLoading) return <Loader />;

  const assigments = assigmentsData.map((assigment) => (
    <AssignmentCard assignment={assigment} />
  ));

  return (
    <Box>
      <Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {assigments}
        </Box>
      </Box>
    </Box>
  );
};

export default OverviewAssignment;
