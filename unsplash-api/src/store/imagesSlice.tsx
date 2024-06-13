import { createSlice } from "@reduxjs/toolkit";
import {
  fetchImageError,
  fetchImageSuccess,
  fetchRandomImageSuccess,
} from "./action";

export interface Image {
  urls: {
    small: string;
  };
}

interface ImagesState {
  image: Image | null;
  images: Image[];
  error: string | null;
}

const initialState: ImagesState = {
  image: null,
  images: [],
  error: null,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImageSuccess, (state, action) => {
        state.images = action.payload.map((url) => ({ urls: { small: url } }));
        state.error = null;
      })
      .addCase(fetchImageError, (state) => {
        state.error = "Failed to fetch image";
      })
     .addCase(fetchRandomImageSuccess, (state, action) => {
       state.image = { urls: { small: action.payload.urls.small } };
      })
    },
})


export default imageSlice.reducer;
