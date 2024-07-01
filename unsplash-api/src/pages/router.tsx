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
import { paths } from "../helpers/constants";
import Collections from "./collections/collections";
import Search from "./search/search";



const { register, login, token, homepage, photos, random, logout,collection,search} = paths;

function Reactrouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={register} element={<Register />} />
          <Route path={login} element={<LoginPage />} />
          <Route path={token} element={<Token />} />
          <Route path="/" element={<ProtectedRoute />}>
                
                  <Route path="/" element={<Homepage />} />
                  <Route path={homepage} element={<Homepage />} />
                  <Route path={collection} element={<Collections />} />
                
              <Route path={photos} element={<NormalPhotos />} />
              <Route path={random} element={<Randomp />} />
              <Route path={logout} element={<LogOut />} />
              <Route path={search} element={<Search />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Reactrouter;
