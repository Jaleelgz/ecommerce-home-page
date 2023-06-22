import { configureStore } from "@reduxjs/toolkit";
import ToastSlice from "./slices/ToastSlice";
import ProductsSlice from "./slices/ProductsSlice";
import CartSlice from "./slices/CartSlice";

export default configureStore({
  reducer: {
    toast: ToastSlice,
    products: ProductsSlice,
    cart: CartSlice,
  },
  devTools: process.env.NODE_ENV === "development",
});
