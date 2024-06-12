import "../App.css"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { API, Random } from '../controller.tsx/imagesController';
import { fetchImagesError, fetchImagesSuccess } from '../store/action';
import { errorSelector, imagesSelector } from '../store/selectors';

const Randomp: React.FC=() => {
  const dispatch = useDispatch();
  const images = useSelector(imagesSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    const fetchImage = async () => {
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
    fetchImage();
  }, [dispatch]);

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const data = await Random();
        if (Array.isArray(data)) {
          const imageUrls = data.map((img: { urls: { small: string } }) => img.urls.small);
          dispatch(fetchImagesSuccess(imageUrls));
        }
      } catch {
        dispatch(fetchImagesError());
      }
    };
    fetchRandomImage();
  }, [dispatch]);

  const Rdm: React.FC = () => (
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
    </div>
  );
return(<Rdm />
)
}

export default Randomp;