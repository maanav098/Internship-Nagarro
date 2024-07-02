//this is to generate random images from unsplash-api


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { Random } from "../controller.tsx/imagesController";
import { fetchImageError, fetchRandomImageSuccess } from "../store/action";
import { errorSelector, imageSelector } from "../store/selectors";
import DrawerAppBar from "../navbar_materialui/material";
import ImgComponent from "../photoComponent/photo/photo"; 

const Randomp: React.FC = () => {
  const dispatch = useDispatch();
  const image = useSelector(imageSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    const fetchRandomImage = async () => {
      Random()
        .then((data) => {
          dispatch(fetchRandomImageSuccess(data));
        })
        .catch((error) => {
          dispatch(fetchImageError());
          console.log("error");
        });
    };
    fetchRandomImage();
  }, [dispatch]);

  return (
    <div>
      <DrawerAppBar />
      <div className="App-header">
        {error ? (
          <div>
            <h1 className="text">SERVER ERROR</h1>
            <p className="text">Error fetching the image</p>
          </div>
        ) : (
          image && (
            <ImgComponent
              keyProp={image.urls.small}
              src={image.urls.small}
              alt="logo"
            />
          )
        )}
      </div>
    </div>
  );
};

export default Randomp;
