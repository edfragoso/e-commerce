"use client";
import styles from "./page.module.css";
import { FilterBar } from "@/components/filterBar";
import { ProductList } from "@/components/productLis";

export default function Home() {
  
  return (
    <main className={styles.main}>
      <FilterBar />
      <ProductList />
    </main>
  );
}
