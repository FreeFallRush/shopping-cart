import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from "./Pages.module.css";

function ShopPage() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div>
        <h1>Shop Page</h1>
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
