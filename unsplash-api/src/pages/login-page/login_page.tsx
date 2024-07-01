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
import { paths } from "../../helpers/constants";
import  styles from "./styles"
import strings from "../../localization/en";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {strings.copyright}
      <Link color="inherit" href={paths.Unshplash_Dev}>
        {strings.unsplash_demo}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();
const {lockIcon,signin,signinAPI,box,signup} = styles

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
      alert(strings.alert_username);
    } else if (!password) {
      alert(strings.alert_password);
    } else if (username === "123" && password === "pass1") {
      userLogin(username, password);
      alert(strings.alert_loggedin)
    } else {
      alert(strings.alert_invalid);
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
          <Avatar sx={lockIcon}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {strings.signIn}
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
              sx={signin}
            >
              {strings.signIn}
            </Button>
            <Button
              fullWidth
              variant="contained"
              startIcon={<CustomIcon />}
              onClick={handleLogin}
              sx={signinAPI}
            >
             {strings.signIn_API}
            </Button>
            <Box sx={box}>
              <Link href="#" variant="body1" margin={1}>
                {strings.forgot}
              </Link>
              <Button
                variant="contained"
                sx={signup}
                href={paths.register}
              >
                {strings.signUp}
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
