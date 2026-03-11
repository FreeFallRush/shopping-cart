import styles from "./Pages.module.css";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard/ProductCard";
import { Link } from "react-router";

const Homepage = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p className={styles.loadingText}>Loading products...</p>;
  if (error) return <p className={styles.errorText}>{error}</p>;

  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <section className={styles.hero}>
        <h1>Welcome to EveryShop!</h1>
        <p>Discover our top-quality products and special deals.</p>
        <Link to="/shop" className={styles.ctaBtn}>
          Shop Now
        </Link>
      </section>

      <section className={styles.featured}>
        <h2 className={styles.pageTitle}>Featured Products</h2>
        <div className={styles.container}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Homepage;
