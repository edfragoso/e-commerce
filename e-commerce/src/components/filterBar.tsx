"use client"
import { FilterContainer } from "./Styles/styledFilterBar";
import { FilterByType } from "./filter-by-type";

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
    </FilterContainer>
  );
}
