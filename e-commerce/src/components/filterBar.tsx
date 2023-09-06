"use client";
import { FilterContainer } from "./Styles/styledFilterBar";
import { FilterByPriority } from "./filter-by-priority";
import { FilterByType } from "./filter-by-type";

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
}
