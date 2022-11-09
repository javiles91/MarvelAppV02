import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./features/characters/charactersSlice";
import characterReducer from "./features/character/characterSlice";
import comicReducer from "./features/comic/comicSlice";
import storyReducer from "./features/story/storySlice";
import comicsReducer from "./features/comics/ComicsSlice";
import sliderReducer from "./features/slider/SliderSlice";
import FilterReducer from "./features/filter/FilterSlice";
import charactersFromComicReducer from "./features/characters/charactersFromComicSlice";
import HorizontalScrollerReducer from "./features/horizontalScroller/HorizontalScrollerSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    charactersFromComic: charactersFromComicReducer,
    character: characterReducer,
    comic: comicReducer,
    story: storyReducer,
    comics: comicsReducer,
    slider: sliderReducer,
    charactersFilter: FilterReducer,
    horizontalScroller: HorizontalScrollerReducer,
  },
});
