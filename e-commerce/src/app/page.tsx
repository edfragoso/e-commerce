"use client";

import { FilterBar } from "@/components/filterBar";
import { ProductList } from "@/components/productLis";
import { DefaultPageLayout } from "@/components/Styles/styledDefaultPageLayout";
import { PageWrapper } from "@/components/Styles/styledPageMain";

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductList />
      </PageWrapper>
    </DefaultPageLayout>
  );
}
