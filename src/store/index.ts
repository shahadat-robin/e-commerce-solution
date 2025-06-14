import { configureStore } from "@reduxjs/toolkit";
import { productsAPISlice } from "./api-slices/products-api";

export const store = configureStore({
  reducer: {
    [productsAPISlice.reducerPath]: productsAPISlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPISlice.middleware),
});
