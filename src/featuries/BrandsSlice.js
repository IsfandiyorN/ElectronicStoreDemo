import { createSlice } from "@reduxjs/toolkit";

const initBrands = [];

const BrandSlice = createSlice({
  name: "brands",
  initialState: { brands: initBrands },
  reducers: {
    fetchBrands: (state, { payload }) => {
      state.brands = payload;
    },
  },
});

export const { fetchBrands } = BrandSlice.actions;
export default BrandSlice.reducer;
