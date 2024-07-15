import { createSlice } from "@reduxjs/toolkit";

const initPost = [];

const ProductsSlice = createSlice({
  name: "products",
  initialState: { products: initPost },
  reducers: {
    fetchProducts: (state, { payload }) => {
      state.products = payload;
    },
    addProduct: (state, {payload}) => {
      state.products.push(payload)
    }
  },
});

export const { fetchProducts, addProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;
