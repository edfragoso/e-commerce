"use client";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "./ProductCard";
import { ListContainer } from "./Styles/styledProducCard";

export function ProductList() {
  const { data } = useProducts();
  /* console.log(products) */
  return (
    <ListContainer>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price_in_cents}
          image={product.image_url}
          id={product.id}
        />
      ))}
    </ListContainer>
  );
}
