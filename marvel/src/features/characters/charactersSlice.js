import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters } from "../../services/CharactersService";

const initialState = {
  characters: [],
  isLoading: true,
};

export const fetchCharacters = createAsyncThunk(
  "characters/getLis",
  getCharacters
);

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.characters = action.payload.results;
    },
    [fetchCharacters.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
console.log(charactersSlice);
export default charactersSlice.reducer;
