import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { ProtectedRoute } from "./login-page/protectedRoute";
import Register from "./register/register";
import LoginPage from "./login-page/login_page";
import Homepage from "./homepage";
import NormalPhotos from "./normalp";
import Randomp from "./randomp";
import { AuthProvider } from "../store/useAuth";
import { LogOut } from "./logout";
import Token from "./login-page/token";
import {paths} from "./helpers/constants";




function Reactrouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={paths.register} element={<Register />} />
          <Route path={paths.login} element={<LoginPage />} />
          <Route path={paths.token} element={<Token />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<Homepage />} />
            <Route path={paths.homepage} element={<Homepage />} />
            <Route path={paths.photos} element={<NormalPhotos />} />
            <Route path={paths.random} element={<Randomp />} />
            <Route path={paths.logout} element={<LogOut />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Reactrouter;
