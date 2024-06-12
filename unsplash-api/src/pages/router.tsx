import { BrowserRouter,Routes,Route } from "react-router-dom";



//pages

import Randomp from "./randomp";
import Photos from "./test";



function Reactrouter() {
    return(
        <>
       
        <BrowserRouter>
        <main>
            <Routes>
                <Route path="/photos" element = {<Photos />}/>
                <Route path="/random" element = {<Randomp />}/>
            </Routes>
        </main>
        </BrowserRouter>
        </>
    )
}


export default Reactrouter;