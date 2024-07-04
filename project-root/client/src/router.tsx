import React from 'react'
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import HomePage from './homepage/homepage';

function Ra() {
  return (
    <div>
      <>
        {
          <BrowserRouter>
            {
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
              </Routes>
            }
          </BrowserRouter>
        }
      </>
    </div>
  );
}

export default Ra;
