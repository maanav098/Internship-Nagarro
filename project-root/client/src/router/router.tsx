import React, { ReactNode } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "../login_page/loginpage";
import HomePage from "../homepage/homepage";
import { AuthProvider } from "../auth/useAuth";
import ProtectedRoute from "./protected_route";
import { DarkModeProvider,useDarkMode } from "../Darkmode/darkmodecontext";
import "./router.css";

interface BackgroundWrapperProps {
  children: ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  const location = useLocation();
  const { darkMode } = useDarkMode();

  let backgroundClass = darkMode ? "dark-mode" : "";
  if (location.pathname === "/") {
    backgroundClass += " login-background";
  } else if (location.pathname === "/home") {
    backgroundClass += " home-background";
  } else if (location.pathname === "/contact") {
    backgroundClass += " contact-background";
  }

  return <div className={backgroundClass}>{children}</div>;
};

const Reactrouter: React.FC = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <BackgroundWrapper>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/home" element={<HomePage />} />
              </Route>
            </Routes>
          </AuthProvider>
        </BackgroundWrapper>
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default Reactrouter;
