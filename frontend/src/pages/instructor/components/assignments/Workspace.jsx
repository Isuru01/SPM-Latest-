import React from "react";
import ReactQuill from "react-quill";
import { Box, Button, Stack, Typography } from "@mui/material";
import "react-quill/dist/quill.snow.css"; // import the styles
import TextEditor from "../../../../components/editor/TextEditor";
import MonacoEditor from "../../../../components/editor/MonacoEditor";
import { useState } from "react";
import Code from "./Code";
import UploadPdf from "./UploadPdf";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  updateAssigment,
  fetchAssigment,
} from "../../../../api/assigment.api.mjs";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Loader";
import Notify from "../../../../components/alert/Notify";

const Workspace = () => {
  const { id } = useParams();

  const [open, setOpen] = useState(false);
  const [workspace, setWokspace] = useState({
    aid: id,
    code: "",
    pdf: "",
    instruction: "",
  });

  const { isLoading, data } = useQuery({
    queryFn: fetchAssigment,
    queryKey: ["assigment", id],
    onSuccess: (data) => {
      console.log(data);
      setWokspace({
        aid: id,
        code: data?.code,
        instruction: data?.instruction,
      });
    },
    onError: () => {},
  });

  const handleSave = (name, value) => {
    setWokspace((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(data);

  const mutation = useMutation({
    mutationFn: updateAssigment,
    onSuccess: () => {
      setOpen(true);
    },
    onError: () => {},
  });

  const handleSubmit = () => {
    mutation.mutateAsync(workspace);
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <Notify
        msg="Workspace Successfully Create"
        open={open}
        setOpen={setOpen}
      />
      <Box sx={{ border: "1px solid #d3dce6", p: 2, ml: 2 }}>
        <Stack spacing={2}>
          <Typography variant="h6">Create Workspace</Typography>
          <TextEditor instruction={workspace.instruction} onSave={handleSave} />
          <Code code={workspace.code} onSave={handleSave} />
          {/* <UploadPdf /> */}

          <Button onClick={handleSubmit} variant="contained">
            Save Workspace
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Workspace;
