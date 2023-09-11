"use client";
import styles from "./page.module.css";
import { FilterBar } from "@/components/filterBar";
import { ProductList } from "@/components/productLis";
import { PageWrapper } from "@/components/styledPageMain";

export default function Home() {
  
  return (
    <PageWrapper>
      <FilterBar />
      <ProductList />
    </PageWrapper>
  );
}
