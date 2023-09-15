"use client";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "./ProductCard";
import { ButtonList, Container, ListContainer } from "./Styles/styledProducCard";
import { useState } from "react";
import { PaginationButton } from "./PaginationButtons";

export function ProductList() {
  const { data } = useProducts();
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  // Calcula o número total de páginas
  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

  // Função para atualizar a página atual
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  
  // Calcula o índice inicial e final dos produtos a serem exibidos
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filtra os produtos a serem exibidos na página atual
  const displayedProducts = data?.slice(startIndex, endIndex);

  return (
    <Container>
      <ButtonList>
      <PaginationButton
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      </ButtonList>
      <ListContainer>
       
        {displayedProducts?.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price_in_cents}
            image={product.image_url}
            id={product.id}
          />
        ))}
      </ListContainer>
    </Container>
  );
}
