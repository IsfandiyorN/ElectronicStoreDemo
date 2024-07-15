import { createSlice } from "@reduxjs/toolkit";

const Cart = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: Cart },
  reducers: {},
});
