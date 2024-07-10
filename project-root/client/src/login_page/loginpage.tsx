import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import './login.css'
import Header from "./Header/Header";
import Leftdown from "./left-right/left";
import Rightdown from "./left-right/right";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Footer from "./footer/footer";
import Low from "./low-content/low";
import { ReactComponent as Icon } from "../assets/icons/metaicon.svg";
import { useDarkMode } from "../Darkmode/darkmodecontext";
import DarkModeToggle from "../Darkmode/darkmodetoggle";
import React, { useState } from "react";
import { startProgress, doneProgress } from "../nprogress-config"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        This Company
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const { darkMode } = useDarkMode();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
     startProgress();

     try {
       const response = await fetch("/login", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ email, password }),
       });

       const data = await response.json();

       if (response.status === 200) {
         login();
         navigate("/home");
       } else {
         setErrorMessage(data.message);
       }
     } catch (error) {
       setErrorMessage("An error occurred. Please try again.");
     } finally {
       doneProgress(); // Finish the loading bar
     }
  };

  return (
    <div className={`loginpage ${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="left-aside">
          <Leftdown />
        </div>
        <div className="banner">
          <DarkModeToggle />
        </div>
        <div className="right-aside">
          <Rightdown />
        </div>
        <div className="main">
          <div className="form">
            <div className="title">
              Welcome,
              <br />
              <span>Sign up to continue</span>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit">LOGIN</button>
              <div className="login-with">
                <div className="button-log">
                  <svg
                    height="30.693px"
                    viewBox="0 0 56.693 56.693"
                    width="56.693px"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path d="M51.981,24.4812c-7.7173-0.0038-15.4346-0.0019-23.1518-0.001c0.001,3.2009-0.0038,6.4018,0.0019,9.6017  c4.4693-0.001,8.9386-0.0019,13.407,0c-0.5179,3.0673-2.3408,5.8723-4.9258,7.5991c-1.625,1.0926-3.492,1.8018-5.4168,2.139  c-1.9372,0.3306-3.9389,0.3729-5.8713-0.0183c-1.9651-0.3921-3.8409-1.2108-5.4773-2.3649  c-2.6166-1.8383-4.6135-4.5279-5.6388-7.5549c-1.0484-3.0788-1.0561-6.5046,0.0048-9.5805  c0.7361-2.1679,1.9613-4.1705,3.5708-5.8002c1.9853-2.0324,4.5664-3.4853,7.3473-4.0811c2.3812-0.5083,4.8921-0.4113,7.2234,0.294  c1.9815,0.6016,3.8082,1.6874,5.3044,3.1163c1.5125-1.5039,3.0173-3.0164,4.527-4.5231c0.7918-0.811,1.624-1.5865,2.3908-2.4196  c-2.2928-2.1218-4.9805-3.8274-7.9172-4.9056C32.0723,4.0363,26.1097,3.995,20.7871,5.8372  C14.7889,7.8907,9.6815,12.3763,6.8497,18.0459c-0.9859,1.9536-1.7057,4.0388-2.1381,6.1836  C3.6238,29.5732,4.382,35.2707,6.8468,40.1378c1.6019,3.1768,3.8985,6.001,6.6843,8.215c2.6282,2.0958,5.6916,3.6439,8.9396,4.5078  c4.0984,1.0993,8.461,1.0743,12.5864,0.1355c3.7284-0.8581,7.256-2.6397,10.0725-5.24c2.977-2.7358,5.1006-6.3403,6.2249-10.2138  C52.5807,33.3171,52.7498,28.8064,51.981,24.4812z"></path>
                  </svg>
                </div>
                <div className="button-log">
                  <Icon
                    height="30.693px"
                    viewBox="0 0 56.693 56.693"
                    width="56.693px"
                  />
                </div>
              </div>
            </form>
            <Copyright />
          </div>
        </div>
        <div className="low-content">
          <Low />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
