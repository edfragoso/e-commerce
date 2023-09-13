"use client";
import { ProductsFetchResponse } from "@/types/productsResponse";
import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";
import { useFilter } from "./useFilter";
import { useDeferredValue } from "react";
import { mountQuery } from "@/utils/filtersGraphql";

/* const apiURL = process.env.NEXT_PUBLIC_API_URL as string   */

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post("http://localhost:3333", { query });
};

export function useProducts() {
  const { type, priority, search } = useFilter();
  const searchDeferred = useDeferredValue(search);
  const query = mountQuery(type, priority);
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", type, priority],
    staleTime: 100 * 60 * 1,
  });

  const products = data?.data?.data?.allProducts;
  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchDeferred.toLowerCase())
  );
  /* console.log(products);
  console.log(filteredProducts); */
  return {
    data: filteredProducts,
  };
}
