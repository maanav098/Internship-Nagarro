import {createAction } from "@reduxjs/toolkit"

export const fetchImagesSuccess = createAction<string[]>('Got the Image');
export const fetchImagesError = createAction('Error finding Image');
