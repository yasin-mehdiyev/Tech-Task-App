import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../root/store";

const initialState = {
  reviews: [],
};

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setAllReviews: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const { setAllReviews } = reviewSlice.actions;

export const selectReviewSlice = (state: RootState) => state.reviews.reviews;

export default reviewSlice.reducer;
