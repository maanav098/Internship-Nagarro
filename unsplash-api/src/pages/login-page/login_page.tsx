import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../store/useAuth";
import "./login.css";
import { ReactComponent as CustomIcon } from "./customicon.svg";
import { paths } from "../helpers/constants";



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={paths.Unshplash_Dev}>
        Unsplash-API-Demo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userLogin } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!username) {
      alert("Please provide a username");
    } else if (!password) {
      alert("Please provide a password");
    } else if (username === "123" && password === "pass1") {
      userLogin(username, password);
      alert("Logged in")
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogin = () => {
    const clientId = `${process.env.REACT_APP_API_ACCESS_KEY}`;
    const redirectUri = `${process.env.REACT_APP_REDIRECT_URL}`;
    const responseType = "code";
    const scope = "public";

    const authUrl = `https://unsplash.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    window.location.href = authUrl;
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box className="login-container">
        <CssBaseline />
        <Paper elevation={10} className="login-paper">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            className="login-form"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={password}
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="contained"
              startIcon={<CustomIcon />}
              onClick={handleLogin}
              sx={{
                mt: 1,
                mb: 2,
                color: "black",
                bgcolor: "white",
                justifyContent: "flex-start",
                "&:hover": {
                  bgcolor: "#6fc1ff",
                },
              }}
            >
              Sign In with Unsplash API
            </Button>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link href="#" variant="body1" margin={1}>
                Forgot password?
              </Link>
              <Button
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
                href={paths.register}
              >
                Sign up
              </Button>
            </Box>
            <Copyright />
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default LoginPage;
