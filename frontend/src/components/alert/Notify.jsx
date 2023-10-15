import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Notify = ({ open, msg, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {msg}
        </MuiAlert>
      </Snackbar>
      {/* Your existing JSX */}
    </>
  );
};

export default Notify;
