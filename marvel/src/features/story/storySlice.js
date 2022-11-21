import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStoryById } from "./../../services/StoryService";

const initialState = {
  story: [],
  isLoading: true,
};

export const fetchStoryById = createAsyncThunk("get/story", getStoryById);

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStoryById.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchStoryById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.story = action.payload.results[0];
    },
    [fetchStoryById.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default storySlice.reducer;
