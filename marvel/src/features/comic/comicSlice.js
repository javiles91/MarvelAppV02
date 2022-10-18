import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getComicById } from "../../services/ComicService";

const initialState = {
  comic: [],
  isLoading: true,
};

export const fetchComicById = createAsyncThunk("comic/get", getComicById);

const comicSlice = createSlice({
  name: "comic",
  initialState,
  reducers: {},
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
  },
});

export default comicSlice.reducer;
