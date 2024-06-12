import { createSlice } from "@reduxjs/toolkit"
import { fetchImagesError, fetchImagesSuccess } from './action';

interface ImagesState {
  images: string[];
  error: string | null;
}

const initialState: ImagesState = {
  images: [],
  error: null,
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImagesSuccess, (state, action) => {
        state.images = action.payload;
        state.error = null;
      })
    builder.addCase(fetchImagesError, (state,action) => {
        state.error ='Failed to fetch images';
      });
  },
});

export default imagesSlice.reducer;


