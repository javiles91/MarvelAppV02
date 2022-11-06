import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getComicById, getComicByTitle } from "../../services/ComicService";

const initialState = {
  comic: [],
  isLoading: true,
  isValidComicName: true,
};

export const fetchComicById = createAsyncThunk("comic/get", getComicById);

export const fetchComicByTitle = createAsyncThunk(
  "comic/getByTitle",
  getComicByTitle
);

const comicSlice = createSlice({
  name: "comic",
  initialState,
  reducers: {
    resetValidityforComic: (state) => {
      state.isValidComicName = true;
    },
  },
  extraReducers: {
    [fetchComicById.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComicById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comic = action.payload.results[0];
    },
    [fetchComicById.rejected]: (state) => {
      state.isLoading = false;
    },
    [fetchComicByTitle.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComicByTitle.fulfilled]: (state, action) => {
      state.isLoading = false;

      if (action.payload === undefined) {
        state.isValidComicName = false;
        state.isLoading = true;
        return;
      }
      state.isValidComicName = true;
      state.comic = action.payload.results[0];

      // state.comic = action.payload.results[0];
    },
    [fetchComicByTitle.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { resetValidityforComic } = comicSlice.actions;

export default comicSlice.reducer;
