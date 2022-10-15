import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters } from "../../services/CharactersService";

const initialState = {
  characters: [],
  isLoading: true,
  page: 1,
  offset: 0,
};

export const fetchCharacters = createAsyncThunk(
  "characters/getLis",
  getCharacters
);

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
      state.offset += 20;
    },
    previousPage: (state) => {
      if (state.page === 1) return;
      else {
        state.page -= 1;
        state.offset -= 20;
      }
    },
    setPageAndOffset: (state, { payload }) => {
      const pageNumber = payload;
      state.page = Number(pageNumber);
      state.offset = 20 * (pageNumber - 1);
    },
  },
  extraReducers: {
    [fetchCharacters.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.characters = action.payload.results;
    },
    [fetchCharacters.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { nextPage, previousPage, setPageAndOffset } =
  charactersSlice.actions;

export default charactersSlice.reducer;
