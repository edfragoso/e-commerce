"use client"
import { useProducts } from "@/hooks/useProducts"

export function ProductList() {
    const { products } = useProducts();
    console.log(products)
    return(
        <></>
    )
}