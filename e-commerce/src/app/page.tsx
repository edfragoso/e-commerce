"use client"
import styles from './page.module.css'
import { FilterBar } from '@/components/filterBar'
import { ProductList } from '@/components/productLis'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function Home() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
    <main className={styles.main}>
      <FilterBar />
      <ProductList />
    </main>
    </QueryClientProvider>
  )
}
