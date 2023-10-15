import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Button,
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ChatIcon from "@mui/icons-material/Chat";
import MonacoEditor from "../../components/editor/MonacoEditor";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchAssigment,
  fetchUserCode,
  submitUserCode,
} from "../../api/assigment.api.mjs";
import Loader from "../Loader";
import Instruction from "./components/Instruction";

const drawerWidth = 420;

const Assigment = () => {
  const queryClient = useQueryClient();

  const theme = useTheme();
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [answer, setAnswer] = React.useState({
    aid: id,
    code: "",
  });

  // console.log(answer);
  const { data: assigmentData, isLoading: assigmentLoading } = useQuery({
    onSuccess: () => {},
    onError: () => {},
    queryFn: fetchAssigment,
    queryKey: ["assigment", id],
  });

  const { data: codeData, isLoading: codeLoading } = useQuery({
    onSuccess: () => {},
    onError: () => {},
    queryFn: fetchUserCode,
    queryKey: ["code", id],
  });

  const mutation = useMutation({
    mutationFn: submitUserCode,
    onSuccess: () => {
      queryClient.invalidateQueries("code");
    },
    onError: () => {},
  });

  const handleSave = (e) => {
    e.preventDefault();
    mutation.mutateAsync(answer);
  };

  if (codeLoading || assigmentLoading) return <Loader />;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Lab Workspace
          </Typography>

          <Box sx={{ display: "flex", ml: "auto" }}>
            <ChatIcon sx={{ fontSize: "2.4rem", mr: 2 }} />
            <PlayCircleOutlineIcon sx={{ fontSize: "2.4rem" }} />
          </Box>

          <Button
            sx={{ backgroundColor: "#FFFFFF", ml: 2 }}
            variant="outlined"
            onClick={handleSave}
          >
            Save
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          bgcolor: "#eeeef0",
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <LabExercise /> */}
        <Instruction instruction={assigmentData.instruction} />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* <MonacoEditor /> */}
        <MonacoEditor setAnswer={setAnswer} value={codeData.code} />
      </Main>
    </Box>
  );
};

export default Assigment;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
