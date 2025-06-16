import { configureStore } from "@reduxjs/toolkit";
import { productsAPISlice } from "./api-slices/products-api";
import { persistCartMiddleware } from "./middleware/persist-cart";
import cartSlice from "./slices/cart.slice";

export const store = configureStore({
  reducer: {
    [productsAPISlice.reducerPath]: productsAPISlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPISlice.middleware, persistCartMiddleware),
});
