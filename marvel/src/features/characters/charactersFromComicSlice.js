import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharactersFromComic } from "../../services/CharactersService";
import { getComicById } from "../../services/ComicService";

const initialState = {
  characters: [],
  isLoading: true,
  comicTitle: "",
};

export const fetchCharactersByComicId = createAsyncThunk(
  "fetchCharacters/ByComicId",
  getCharactersFromComic
);

export const fetchComicByTitle = createAsyncThunk(
  "fetchComic/ByTitle",
  getComicById
);

const charactersFromComicSlice = createSlice({
  name: "charactersFromComic",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharactersByComicId.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCharactersByComicId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.characters = action.payload.results;
    },
    [fetchCharactersByComicId.rejected]: (state) => {
      state.isLoading = false;
    },
    [fetchComicByTitle.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComicByTitle.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.comicTitle = action.payload.results[0].title;
    },
    [fetchComicByTitle.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default charactersFromComicSlice.reducer;
