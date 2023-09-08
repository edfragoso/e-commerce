"use client";
import { useFilter } from "@/hooks/useFilter";
import { Logo, TagHeader, sairaStencil } from "./Styles/styledHeader";
import { CartControl } from "./cart-control";
import { PrimaryInputSearchIcon } from "./primary-input";

export function Header() {
  const { setSearch, search } = useFilter();
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>e-Commerce</Logo>
      <div>
        <PrimaryInputSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procura por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  );
}
