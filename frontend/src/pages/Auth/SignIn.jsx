import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {
  Box,
  TextField,
  Typography,
  Button,
  Link,
  Paper,
  FormHelperText,
} from "@mui/material";
import { signIn } from "../../api/auth.api.mjs";
import { AuthContext } from "../../context/AuthProvider";

const SignIn = () => {
  // const { authenticate, setAuthenticate } = useContext(AuthContext);

  const [error, setError] = useState();
  const [submit, setSubmit] = useState(0);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      navigate("/");
      localStorage.setItem("log", true);
    },
    onError: (error) => {
      const {
        message,
        response: { data },
      } = error;

      const msg = data.message ? data.message : message;
      setError("Check email and password again");
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setSubmit((prev) => prev + 1);
    mutation.mutateAsync(user);
  };

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
        >
          <Box>
            <Typography
              color="primary"
              sx={{ fontSize: "3.2rem", fontWeight: "600" }}
            >
              IIPLE LAB ENVIRONMENT
            </Typography>

            <Typography
              color="primary"
              mt={2}
              sx={{ fontSize: "1rem", fontWeight: "600" }}
            >
              #Java Coding Lab Environment
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { xs: "100vw", md: "auto" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component={Paper}
            variant="outlined"
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: { xs: "320px", md: "400px" },
            }}
          >
            <Typography
              variant="h2"
              color="primary"
              sx={{ fontSize: "1.8rem", fontWeight: 600 }}
            >
              Sign In
            </Typography>

            <TextField
              name="email"
              onChange={handleChange}
              type="email"
              size="small"
              error={user.email === "" && submit > 0 ? true : false}
              label="Email"
            />
            <TextField
              name="password"
              onChange={handleChange}
              error={user.password === "" && submit > 0 ? true : false}
              size="small"
              type="password"
              label="Password"
            />

            <Link>Fogot password</Link>

            <Button size="small" variant="contained" onClick={handleSubmit}>
              Sign in
            </Button>

            <Box>
              <FormHelperText
                sx={{ color: "red", position: "relative", top: 0 }}
              >
                {error ? error : ""}
              </FormHelperText>
            </Box>
            <Link
              sx={{ mb: 2, cursor: "poiner" }}
              onClick={() => navigate("/signup")}
            >
              Dont't have an account? Sign Up Now
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
