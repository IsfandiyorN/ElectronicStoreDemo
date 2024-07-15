import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../featuries/ProductsSlice";
import ColorsReducer from "../featuries/ColorsSlice";
import BrandsReducer from "../featuries/BrandsSlice";

export const store = configureStore({
    reducer:{
        ProductsReducer,
        ColorsReducer,
        BrandsReducer,
    }
})