
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { Random } from "../controller.tsx/imagesController";
import { fetchImageError, fetchRandomImageSuccess } from "../store/action";
import { errorSelector, imageSelector } from "../store/selectors";
import DrawerAppBar from "../material/material";

const Randomp: React.FC = () => {
  const dispatch = useDispatch();
  const image = useSelector(imageSelector);
  const error = useSelector(errorSelector);
  


  useEffect(() => {
      const fetchRandomImage = async () => {
        try {
          const data = await Random();
          dispatch(fetchRandomImageSuccess(data));
        } catch {
          dispatch(fetchImageError());
        }
      };
      
    fetchRandomImage();
  }, [dispatch]);

  return (
    <div><DrawerAppBar />
    <div className="App-header">
      {error ? (
        <div>
          <h1 className="text">SERVER ERROR</h1>
          <p className="text">Error fetching the image</p>
        </div>
      ) : (
        image && (
          <img
            key={image.urls.small}
            src={image.urls.small}
            alt="logo"
            className="App-logo"
          />
        )
      )}
    </div>
    </div>
  );
};

export default Randomp;
