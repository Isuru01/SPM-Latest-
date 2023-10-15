import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { getAssigmentAnalysis } from "../../../../api/assigment.api.mjs";
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { useQuery } from "@tanstack/react-query";
import { DataGrid } from "@mui/x-data-grid";

const AssigmentData = () => {
  const { id } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["assigment", id],
    queryFn: getAssigmentAnalysis,
    onSuccess: () => {},
    onError: () => {},
  });

  if (isLoading) return <div>Loading</div>;

  const { answers, title } = data;

  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["ID", "Username", "Email", "Last Update"];
    const tableRows = [];

    answers.forEach((assigment) => {
      const assigmentData = [
        assigment.id,
        assigment.user,
        assigment.email,
        assigment.createdAt,
      ];
      tableRows.push(assigmentData);
    });

    autoTable(doc, { head: [tableColumn], body: tableRows });

    doc.save("submissions.pdf");
  };

  console.log(answers);

  const rows = answers.map((assigment, id) => ({
    id: id,
    username: assigment.user,
    email: assigment.email,
    lastUpdated: assigment.createdAt,
    download: assigment.code,
  }));

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>
          {title}
        </Typography>

        <Button variant="outlined" onClick={exportToPDF}>
          Export to PDF
        </Button>
      </Box>

      <Box sx={{ border: "1px solid #d3dce6", p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, mt: 2 }}>
          Student Submissions
        </Typography>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AssigmentData;

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "profileImg",
    headerName: "",
    width: 80,
    sortable: false,
    renderCell: (params) => (
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    ),
  },
  {
    field: "username",
    headerName: "Username",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    width: 180,
    editable: true,
  },
  {
    field: "lastUpdated",
    headerName: "Last Update",
    width: 150,
  },
  {
    field: "download",
    headerName: "Download Code",
    width: 150,
    renderCell: (params) => {
      const blob = new Blob([params.row.download], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      return (
        <a href={url} download="code.java">
          Download
        </a>
      );
    },
  },
];
