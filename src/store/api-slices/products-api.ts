import type { IProduct } from "@/sections/product-list/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IProductResponse {
  limit: number;
  skip: number;
  total: number;
  products: IProduct[];
}

export const productsAPISlice = createApi({
  reducerPath: "product-api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductResponse, string>({
      query: (name) => name,
    }),
  }),
});

export const { useGetProductsQuery } = productsAPISlice;
