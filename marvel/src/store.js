import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./features/characters/charactersSlice";

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
});
