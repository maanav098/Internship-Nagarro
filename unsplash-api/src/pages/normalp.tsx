import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { API, } from "../controller.tsx/imagesController";
import { fetchImageError, fetchImageSuccess } from "../store/action";
import { errorSelector, imagesSelector } from "../store/selectors";
import DrawerAppBar from "../navbar_materialui/material";

const NormalPhotos: React.FC = () => {
  const dispatch = useDispatch();
  const images = useSelector(imagesSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const data = await API();

        if (Array.isArray(data)) {
          const imageUrls = data.map((img) => img.urls.small);
          
          dispatch(fetchImageSuccess(imageUrls));
          
        } else {
          dispatch(fetchImageError());
        }
      } catch (error) {
        dispatch(fetchImageError());
        console.log("error", error);
      }
    };

    fetchImage();
  }, [dispatch]);
  return (
    <div>
      <DrawerAppBar />

      <div>
        {error ? (
          <div>
            <h1 className="text">SERVER ERROR</h1>
            <p className="text"> Error fetching the image</p>
          </div>
        ) : (
          images.length > 0 && (
            <div className="App-header">
              {images.slice(0, 30).map((image, index) => (
                <img
                  key={index}
                  src={image.urls.small}
                  className="App-logo"
                  alt="logo"
                />
              ))}
            
            </div>
      
          )
        )}
      </div>
    </div>
  );
};

export default NormalPhotos;

