import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchAssigments } from "../../../api/assigment.api.mjs";
import Loader from "../../Loader";
import AssigmentCard from "../../../components/cards/AssignmentCard";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";

const AssigmentsResults = () => {
  const { isLoading, data: assigments } = useQuery({
    queryFn: fetchAssigments,
    queryKey: ["assigments"],
    onSuccess: () => {},
    onError: () => {},
  });

  if (isLoading) return <Loader />;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        mt: 2,
        gap: 2,
      }}
    >
      {assigments.map((assigment, index) => (
        <AssigmentCard link={`/assignments`} assignment={assigment} />
      ))}
    </Box>
  );
};

export default AssigmentsResults;
