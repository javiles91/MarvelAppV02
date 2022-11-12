import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: {},
  comics: {},
  isLoading: true,
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addCharacter: (state, action) => {
      console.log("add");
      const characterObject = action.payload;
      state.characters = { ...state.characters, ...characterObject };
    },
    removeCharacter: (state, action) => {
      console.log("remove");
      const characterId = action.payload;
      delete state.characters[characterId];
    },
    addComic: (state, action) => {
      console.log("add comic");
      const comicObject = action.payload;
      state.comics = { ...state.comics, ...comicObject };
    },
    removeComic: (state, action) => {
      const comicId = action.payload;
      delete state.comics[comicId];
    },
  },
});

export const { addCharacter, removeCharacter, addComic, removeComic } =
  bookmarksSlice.actions;
export default bookmarksSlice.reducer;
