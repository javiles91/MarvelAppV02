import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getComics } from "../../services/ComicsService";

const initialState = {
  comics: [],
  isLoading: true,
  page: 0,
  offset: 0,
  total: 0,
  isValidSearch: true,
  isFiltered: false,
  ascending: true,
};

export const fetchComics = createAsyncThunk("get/comics", getComics);

const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    setPageAndOffset: (state, { payload }) => {
      const pageNumber = payload;
      state.page = Number(pageNumber);
      state.offset = 20 * (pageNumber - 1);
    },
    setIsFiltered: (state, { payload }) => {
      state.isFiltered = payload;
    },
    toggleAscending: (state) => {
      console.log("ascending");
      state.ascending = !state.ascending;
    },
  },
  extraReducers: {
    [fetchComics.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComics.fulfilled]: (state, action) => {
      state.isLoading = false;

      if (action.payload.results.length === 0) {
        state.isValidSearch = false;
        return;
      }

      state.isValidSearch = true;
      state.total = action.payload.total;
      state.comics = action.payload.results;
    },
    [fetchComics.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setPageAndOffset, setIsFiltered, toggleAscending } =
  comicsSlice.actions;

export default comicsSlice.reducer;
