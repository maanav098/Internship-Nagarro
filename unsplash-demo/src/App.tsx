import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import API from './controllers.tsx/imagesController';
import { fetchImagesError,fetchImagesSuccess } from './store/action';
import { RootState } from './store/store';
import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  timeout: 1000,
})


function App() {
  const dispatch = useDispatch();
  const images = useSelector((state: RootState) => state.images.images);
  const error = useSelector((state: RootState) => state.images.error);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await API();
        if (Array.isArray(data)) {
          const imageUrls = data.map((img: { urls: { small: string } }) => img.urls.small);
          dispatch(fetchImagesSuccess(imageUrls));
        }
      } catch {
        dispatch(fetchImagesError());
      }
    };
    fetchData();
  }, [dispatch]);


  return (
    <div className="App">
      <header className="App-header">
        <div>
          {error ? (
            <p>Error</p>
          ) : (
            images.length > 0 && (
              <div className="App-header">
                {images.slice(0, 10).map((image, index) => (
                  <img key={index} src={image} className="App-logo" alt="logo" />
                ))}
              </div>
            )
          )}
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
