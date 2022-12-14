import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters } from "../../services/CharactersService";

const initialState = {
  characters: [],
  isLoading: true,
  page: 0,
  offset: 0,
  ascending: true,
  total: 0,
};

export const fetchCharacters = createAsyncThunk(
  "characters/getLis",
  getCharacters
);

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setPageAndOffset: (state, { payload }) => {
      const pageNumber = payload;
      const page = Number(pageNumber);
      const offset = 20 * (pageNumber - 1);
      const newState = { ...state, page, offset };
      return newState;
    },
    toggleAscending: (state) => {
      // console.log("ascending"); Delete this later
      state.ascending = !state.ascending;
    },
  },
  extraReducers: {
    [fetchCharacters.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.total = action.payload.total;
      state.characters = action.payload.results;
    },
    [fetchCharacters.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setPageAndOffset, toggleAscending } = charactersSlice.actions;

export default charactersSlice.reducer;
