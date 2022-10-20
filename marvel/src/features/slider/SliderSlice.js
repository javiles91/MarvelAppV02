import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import dareDevilImg from "../../components/Images/Daredevil-Matthew-Murdock.jpg";
import falconImg from "../../components/Images/falcon.jpeg";
import lokiImg from "../../components/Images/LOKI-SERIE.jpg";
import marvel from "../../components/Images/marvel.jfif";
import hawkImg from "../../components/Images/pughhawkeye.jpg";
import sheHulkImg from "../../components/Images/she-hulk.jpg";

const slides = [marvel, dareDevilImg, falconImg, lokiImg, sheHulkImg, hawkImg];

const initialState = {
  idx: 0,
  slides,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    goToNext: (state) => {
      const isLastSlide = state.idx === slides.length - 1;
      state.idx = isLastSlide ? 0 : state.idx + 1;
    },
    goToPrevious: (state) => {
      const isFirstSlide = state.idx === 0;
      state.idx = isFirstSlide ? slides.length - 1 : state.idx - 1;
    },
    goToSlide: (state, { payload }) => {
      const index = payload;
      state.idx = index;
    },
  },
});

export const { goToNext, goToPrevious, goToSlide } = sliderSlice.actions;

export default sliderSlice.reducer;
