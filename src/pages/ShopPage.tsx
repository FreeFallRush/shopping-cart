import { useOutletContext } from "react-router";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from "./Pages.module.css";
import type { Product } from "../types/types";

interface OutletContextType {
  addToCart: (product: Product) => void;
}

function ShopPage() {
  const { addToCart } = useOutletContext<OutletContextType>();
  const { products, loading, error } = useProducts();

  if (loading) return <p className={styles.loadingText}>Loading products...</p>;
  if (error) return <p className={styles.errorText}>{error}</p>;

  return (
    <>
      <div>
        <h1 className={styles.pageTitle}>Shop Page</h1>
        <div className={styles.shopContainer}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default ShopPage;
