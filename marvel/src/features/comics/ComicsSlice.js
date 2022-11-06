import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getComics } from "../../services/ComicsService";

const initialState = {
  comics: [],
  isLoading: true,
  page: 1,
  offset: 0,
  total: 0,
  isValidSearch: true,
  isFiltered: false,
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

export const { setPageAndOffset, setIsFiltered } = comicsSlice.actions;

export default comicsSlice.reducer;
