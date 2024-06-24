
import { RootState } from "./store";

export const imagesSelector = (state: RootState) => state.images.images;
export const errorSelector = (state: RootState) => state.images.error;
export const imageSelector = (state: RootState) => state.images.image;

