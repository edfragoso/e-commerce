"use client";
import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/prioruty-types";
import { ReactNode, createContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priority: PriorityTypes.NEWS,
  setPriority: (value: PriorityTypes) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
});

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(PriorityTypes.NEWS);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        setSearch,
        setPage,
        setType,
        priority,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
