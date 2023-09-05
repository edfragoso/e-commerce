"use client"
import { FilterItem, FilterList } from "./Styles/styledFilterBar";

export function FilterByType() {
  return (
    <FilterList>
      <FilterItem selected={true}>Todos os produtos</FilterItem>
      <FilterItem selected={false}>Camisetas</FilterItem>
      <FilterItem selected={false}>Canecas</FilterItem>
    </FilterList>
  );
}
