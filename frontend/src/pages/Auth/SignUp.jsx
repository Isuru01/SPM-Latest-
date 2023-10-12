import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Typography,
  Button,
  Link,
  Paper,
  FormHelperText,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../api/auth.api.mjs";

const SignUp = () => {
  const navigate = useNavigate();

  const [submit, setSubmit] = useState(0);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      navigate("/signin");
    },
    onError: () => {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePassword = (e) => {
    const { name, value } = e.target;
    value !== user.password ? setError("Password doesn't match") : "";
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setSubmit((prev) => prev + 1);
    mutation.mutateAsync(user);
  };

  // if (localStorage.getItem("log")) {
  //   navigate("/");
  // }

  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          maxWidth: "1500px",
          margin: "auto",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100vw", md: "auto" },
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box
              component={Paper}
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                p: 2,
                gap: 3,
                width: { xs: "320px", md: "400px" },
              }}
            >
              <Typography
                variant="h2"
                color="primary"
                sx={{ fontSize: "1.8rem", fontWeight: 600 }}
              >
                Sign Up
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  fullWidth
                  onChange={handleChange}
                  error={user.username === "" && submit > 0 ? true : false}
                  value={user.username}
                  name="username"
                  type="text"
                  size="small"
                  label="Username"
                />
              </Box>

              <TextField
                onChange={handleChange}
                error={user.email === "" && submit > 0 ? true : false}
                value={user.email}
                name="email"
                type="email"
                size="small"
                label="Email"
              />
              <TextField
                onChange={handleChange}
                required
                error={user.password === "" && submit > 0 ? true : false}
                value={user.password}
                name="password"
                size="small"
                type="password"
                label="Password"
              />
              <TextField
                name="verifyPwd"
                size="small"
                type="password"
                onChange={handlePassword}
                label="Re Type Password"
              />

              <Box>
                <FormHelperText
                  sx={{ color: "red", position: "relative", top: 0 }}
                >
                  {error ? error : ""}
                </FormHelperText>
              </Box>

              <Button
                type="submit"
                size="small"
                variant="contained"
                onClick={handleSubmit}
              >
                Sign Up
              </Button>

              <Link
                sx={{ mb: 2, cursor: "poiner" }}
                onClick={() => navigate("/signin")}
              >
                Already have an account? Sign In Now
              </Link>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
