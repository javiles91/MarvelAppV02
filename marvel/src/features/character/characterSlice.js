import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacterById } from "../../services/CharacterService";
import { getCharacterByName } from "../../services/CharacterService";

const initialState = {
  id: "",
  character: [],
  isLoading: true,
  isValidCharacterName: true,
};

export const fetchCharacterById = createAsyncThunk(
  "character/getById",
  getCharacterById
);

export const fetchCharacterByName = createAsyncThunk(
  "character/getByName",
  getCharacterByName
);

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacterId: (state, action) => {
      state.id = action.payload;
    },
  },
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
    [fetchCharacterByName.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCharacterByName.fulfilled]: (state, action) => {
      state.isLoading = false;
      //Aca tengo que ver como putas borro el texto y muestro un mensaje de invalido
      if (action.payload.results.length === 0) {
        state.isValidCharacterName = false;
        return;
      }
      state.isValidCharacterName = true;
      state.character = action.payload.results[0];
    },
    [fetchCharacterByName.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setCharacterId } = characterSlice.actions;

export default characterSlice.reducer;
