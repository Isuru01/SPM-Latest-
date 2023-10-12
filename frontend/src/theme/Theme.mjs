import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1769aa",
    },
    secondary: {
      main: "#424242",
    },
    black: {
      main: "#212121",
      secondary: "#424242",
      shade: "#616161",
    },
    text: {
      primary: "#25265e",
      secondary: "#424242",
      disabled: "#616161",
      hint: "#212121",
    },
    typography: {
      fontFamily: "Inter, sans-serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

export default theme;
