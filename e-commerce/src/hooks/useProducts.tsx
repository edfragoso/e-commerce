"use client";
import { ProductsFetchResponse } from "@/types/productsResponse";
import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";

/* const apiURL = process.env.NEXT_PUBLIC_API_URL as string  */

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
  return axios.post("http://localhost:3333", {
    query: `
        query {
            allProducts {
                id
                name
                price_in_cents
            }
        }`,
  });
};

export function useProducts() {
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ["product"],
  });
  
  const products = data?.data.data.allProducts;
  console.log(products);
  return {
    products,
  };
}
