import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios";
import { AppThunk } from "./index";

export interface List{
    id:number;
    title:string;
    userId:number;
    completed:boolean;
}

export interface PhotoState {
  photos: List[];
  loading: boolean;
  errors: string;
}

const initialState: PhotoState = {
  photos: [],
  loading: false,
  errors: "",
}

const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload
    },

    setPhotos: (state, { payload }: PayloadAction<List[]>) => {
      state.photos = payload
    },
  },
})

export const { setLoading, setErrors, setPhotos } = photoSlice.actions

export default photoSlice.reducer

export const photosSelector = (state: { photosStore: PhotoState }) =>
  state.photosStore

export const getPhotos = (): AppThunk => {
    return async dispatch => {
      dispatch(setLoading(true))
      try {
        const baseURL: string = "https://jsonplaceholder.typicode.com/todos";
        const res = await axios.get(
            `${baseURL}`
          )
        dispatch(setLoading(false))
        dispatch(setPhotos(res.data))
      } catch (error:any) {
        dispatch(setErrors(error))
        dispatch(setLoading(false))
      }
    }
  }