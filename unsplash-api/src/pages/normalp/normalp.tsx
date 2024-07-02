//this is a webpage which will show you random images from the unsplash-api and this has infinitescroll{it will call the api again once you reach the end of the page}

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../../App.css";
import { axiosInstance } from "../../controller.tsx/axiosIntstance";
import { fetchImageError, fetchImageSuccess } from "../../store/action";
import DrawerAppBar from "../../navbar_materialui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { API } from "../../controller.tsx/imagesController";
import ImgComponent from "../../photoComponent/photo/photo";

const NormalPhotos: React.FC = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<any[]>([]);
  const [error1, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/photos?page=${page}&&per_page=30`);
        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }
        const data = response.data;
        setItems((prevItems) => [...prevItems, ...data]);
      } catch (error) {
        console.log("Error fetching data:", error);
        setError(error);
      }
    };
    fetchData();
  }, [page]);

  const fetchImage = async () => {
    try {
      const data = await API;

      if (Array.isArray(data)) {
        const imageUrls = data.map((img) => img.urls.small);
        dispatch(fetchImageSuccess(imageUrls));
      } else {
        dispatch(fetchImageError());
      }
    } catch (error) {
      dispatch(fetchImageError());
      console.log("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, [dispatch]);

  const loadMoreData = () => {
    setPage(page + 1);
  };

  const renderImages = () => (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className="App-header">
        {items.map((image, index) => (
          <ImgComponent
            keyProp={index}
            src={image.urls.small}
            alt={`image_${index}`}
          />
        ))}
      </div>
    </InfiniteScroll>
  );

  return (
    <div>
      <DrawerAppBar />
      {renderImages()}
      {error1 && (
        <div>
          <h1 className="text">SERVER ERROR</h1>
          <p className="text">Error fetching the images</p>
        </div>
      )}
    </div>
  );
};

export default NormalPhotos;
