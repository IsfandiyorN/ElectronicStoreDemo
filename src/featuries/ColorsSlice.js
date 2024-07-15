import { createSlice } from "@reduxjs/toolkit";

const initColors = [];

const ColorsSlice = createSlice({
  name: "colors",
  initialState: { colors: initColors },
  reducers: {
    fetchColors: (state, { payload }) => {
      state.colors = payload;
    },
  },
});

export const { fetchColors } = ColorsSlice.actions;
export default ColorsSlice.reducer;
