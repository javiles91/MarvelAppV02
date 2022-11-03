import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters } from "../../services/CharactersService";

const initialState = {
  characters: [],
  isLoading: true,
  page: 1,
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
    //DELETE THE BELOW 2 METHODS LATER
    // nextPage: (state) => {
    //   state.page += 1;
    //   state.offset += 20;
    // },
    // previousPage: (state) => {
    //   if (state.page === 1) return;
    //   else {
    //     state.page -= 1;
    //     state.offset -= 20;
    //   }
    // },
    setPageAndOffset: (state, { payload }) => {
      const pageNumber = payload;
      state.page = Number(pageNumber);
      state.offset = 20 * (pageNumber - 1);
    },
    toggleAscending: (state) => {
      console.log("ascending");
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
