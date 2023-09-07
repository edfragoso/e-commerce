"use client";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "./ProductCard";
import { ListContainer } from "./Styles/styledProducCard";

export function ProductList() {
  const { products } = useProducts();
  /* console.log(products) */
  return (
    <ListContainer>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price_in_cents}
          image={product.image_url}
        />
      ))}
    </ListContainer>
  );
}
