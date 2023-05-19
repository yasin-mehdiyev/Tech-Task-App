import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../root/store";

const initialState = {
  resources: [],
};

export const resourceSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    setAllResources: (state, action) => {
      state.resources = action.payload;
    },
  },
});

export const { setAllResources } = resourceSlice.actions;

export const selectResourceSlice = (state: RootState) => state.resources.resources;

export default resourceSlice.reducer;
