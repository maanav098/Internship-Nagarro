import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../login_page/loginpage";
import HomePage from "../homepage/homepage";
import { AuthProvider } from "../auth/useAuth";
import ProtectedRoute from "./protected_route";


const Reactrouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Reactrouter;
