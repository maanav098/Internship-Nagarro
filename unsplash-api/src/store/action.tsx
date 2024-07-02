import {createAction } from "@reduxjs/toolkit"
import {Image} from "./imagesSlice"

export const fetchImageSuccess = createAction<(string[])>('Got the Image');
export const fetchImageError = createAction('Error finding Image');
export const fetchRandomImageSuccess =  createAction<Image>("Got the Random Image");
