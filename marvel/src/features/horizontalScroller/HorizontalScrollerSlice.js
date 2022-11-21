import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters } from "../../services/CharactersService";
import { getComics } from "../../services/ComicsService";

const initialState = {
  characters: [],
  comics: [],
  isLoading: true,
};

export const fetchCharactersForScroller = createAsyncThunk(
  "get/charactersForScroller",
  getCharacters
);

export const fetchComicsForScroller = createAsyncThunk(
  "get/comicsForScroller",
  getComics
);

const horizontalScrollerSlice = createSlice({
  name: "horizontalScroller",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharactersForScroller.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCharactersForScroller.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.characters = action.payload.results;
    },
    [fetchCharactersForScroller.rejected]: (state) => {
      state.isLoading = false;
    },
    [fetchComicsForScroller.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComicsForScroller.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comics = action.payload.results;
    },
    [fetchComicsForScroller.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default horizontalScrollerSlice.reducer;
