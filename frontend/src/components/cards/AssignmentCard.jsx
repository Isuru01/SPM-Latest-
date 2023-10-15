import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Snackbar,
  Button,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { addPositionPropertiesToSections } from "@mui/x-date-pickers/internals";
import { useMutation } from "@tanstack/react-query";
import { deleteAssigment } from "../../api/assigment.api.mjs";
import { useQueryClient } from "@tanstack/react-query";
import Notify from "../alert/Notify";

const AssignmentCard = ({ assignment, type, history, link }) => {
  const naviagte = useNavigate();
  const queryClient = useQueryClient();

  const [open, setOpen] = React.useState(false);

  const { _id, key, title, group, duration, description } = assignment;

  const handleNavigate = (assigment, aid) => {
    const navigateLink = link ? `${link}/${aid}` : aid;

    naviagte(navigateLink);
  };

  const mutation = useMutation({
    mutationFn: deleteAssigment,
    onSuccess: () => {
      setOpen(true);
      queryClient.invalidateQueries("assignments");
    },
    onError: () => {},
  });

  const handleDelete = () => {
    mutation.mutateAsync(_id);
  };

  const handleEditNavigate = (assignment, aid) => {
    naviagte(`/instructor/assignment/update/${_id}`);
  };

  return (
    <>
      <Notify
        msg="Assignment Successfully Deleted"
        open={open}
        setOpen={setOpen}
      />

      <Card
        sx={{
          minWidth: 500,
          maxWidth: 500,
          p: 2,
          borderRadius: 0,
          border: "1px solid #d3dce6",
          position: "relative",
          top: 0,
          pointer: "cursor",
          transition: "top 0.5s ease, background 0.5s ease",
          "&:hover": {
            top: -10,
            background:
              "linear-gradient(0deg, rgba(197,195,244,1) 5%, rgba(136,140,255,0.0984768907563025) 40%)",
            border: undefined,
          },
        }}
      >
        <Typography gutterBottom variant="h6" sx={{ fontSize: "1.2rem" }}>
          {title?.slice(0, 50)}
        </Typography>

        <Typography gutterBottom variant="body2" color="text.secondary">
          {description?.slice(0, 100)}
        </Typography>

        <Box sx={{ color: "#0556f3" }}>
          <Typography
            sx={{ mb: 2, mt: 2, fontWeight: 600 }}
            variant="subtitle2"
            component="div"
          >
            group {group ? group : "N/A"}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {type === "instructor" && (
              <Button
                color="error"
                variant="contained"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </Button>
            )}

            <Box>
              <Button
                sx={{ mr: 1 }}
                variant="contained"
                onClick={() => handleNavigate(title, _id)}
              >
                View
              </Button>

              {type === "instructor" && (
                <Button
                  variant="outlined"
                  onClick={() => handleEditNavigate(title, _id)}
                >
                  Edit
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default AssignmentCard;
