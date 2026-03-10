import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import type { Product } from "../types/types";

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
}

function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError((err as Error).message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return { products, loading, error };
}

export default useProducts;
