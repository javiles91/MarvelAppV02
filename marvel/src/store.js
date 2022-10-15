import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./features/characters/charactersSlice";
import characterReducer from "./features/character/characterSlice";
import comicReducer from "./features/comic/comicSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    character: characterReducer,
    comic: comicReducer,
  },
});
