import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from "./Pages.module.css";

function ShopPage() {
  const { products, loading, error } = useProducts();

  if (loading) return <p className={styles.loadingText}>Loading products...</p>;
  if (error) return <p className={styles.errorText}>{error}</p>;

  return (
    <>
      <div>
        <h1 className={styles.pageTitle}>Shop Page</h1>
        <div className={styles.shopContainer}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
export default ShopPage;
