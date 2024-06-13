import { BrowserRouter,Routes,Route } from "react-router-dom";

//pages

import Randomp from "./randomp";
import Homepage from "./homepage";
import NormalPhotos from "./normalp";
import LoginPage from "./login-page/login_page";



function Reactrouter() {
    return (
      <>
        <BrowserRouter>
          <main>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Homepage />} />
              <Route path="/photos" element={<NormalPhotos />} />
              <Route path="/random" element={<Randomp />} />
            </Routes>
          </main>
        </BrowserRouter>
      </>
    );
}


export default Reactrouter;