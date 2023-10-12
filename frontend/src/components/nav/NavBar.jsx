import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMutation } from "@tanstack/react-query";
import { logOut } from "../../api/auth.api.mjs";

const NavBar = () => {
  const mutation = useMutation({
    mutationFn: logOut,
    onSuccess: () => {},
    onError: () => {},
  });

  const handleLogout = () => {
    mutation.mutateAsync();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          IIPLE
        </Typography>
        <Button
          onClick={handleLogout}
          variant="outlined"
          sx={{ color: "#FFFFFF" }}
        >
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
