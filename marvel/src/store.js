import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./features/characters/charactersSlice";
import characterReducer from "./features/character/characterSlice";
import comicReducer from "./features/comic/comicSlice";
import storyReducer from "./features/story/storySlice";
import comicsReducer from "./features/comics/ComicsSlice";
import sliderReducer from "./features/slider/SliderSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    character: characterReducer,
    comic: comicReducer,
    story: storyReducer,
    comics: comicsReducer,
    slider: sliderReducer,
  },
});
