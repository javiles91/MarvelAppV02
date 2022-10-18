import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacterById } from "../../services/CharacterService";

const initialState = {
  character: [],
  isLoading: true,
};

export const fetchCharacterById = createAsyncThunk(
  "character/get",
  getCharacterById
);

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacterById.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCharacterById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.character = action.payload.results[0];
    },
    [fetchCharacterById.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default characterSlice.reducer;
