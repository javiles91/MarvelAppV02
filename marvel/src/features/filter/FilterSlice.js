import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  filterType: "name",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setType: (state, action) => {
      state.filterType = action.payload;
    },
  },
});

export const { setType } = filterSlice.actions;

export default filterSlice.reducer;
