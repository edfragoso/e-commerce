import { ProductFetchResponse } from "@/types/products";
import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post("http://localhost:3333", {
    query: `
    query {
        Product(id: "${productId}") {
            name
            description
            category
            price_in_cents
            image_url
        }
    }
    `,
  });
};

export function useProduct(id: string) {
  const { data } = useQuery(["product", id], () => fetcher(id), {
    enabled: !!id,
  });

  return {
    data: data?.data?.data?.Product,
  };
}