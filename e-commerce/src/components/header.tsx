"use client";
import { Logo, TagHeader, sairaStencil } from "./Styles/styledHeader";
import { CartControl } from "./cart-control";
import { PrimaryInputSearchIcon } from "./primary-input";

export function Header() {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>e-Commerce</Logo>
      <div>
        <PrimaryInputSearchIcon placeholder="Procura por algo específico?" />
        <CartControl />
      </div>
    </TagHeader>
  );
}
