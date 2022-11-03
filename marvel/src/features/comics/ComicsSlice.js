import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getComics } from "../../services/ComicsService";

const initialState = {
  comics: [],
  isLoading: true,
  page: 1,
  offset: 0,
  total: 0,
};

export const fetchComics = createAsyncThunk("get/comics", getComics);

const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    //Delete this later
    // nextPage: (state) => {
    //   state.page += 1;
    //   state.offset += 20;
    // },
    // previousPage: (state) => {
    //   if (state.page === 1) return;
    //   else {
    //     state.page -= 1;
    //     state.offset -= 20;
    //   }
    // },
    setPageAndOffset: (state, { payload }) => {
      const pageNumber = payload;
      state.page = Number(pageNumber);
      state.offset = 20 * (pageNumber - 1);
    },
  },
  extraReducers: {
    [fetchComics.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComics.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.total = action.payload.total;
      state.comics = action.payload.results;
    },
    [fetchComics.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setPageAndOffset } = comicsSlice.actions;

export default comicsSlice.reducer;
