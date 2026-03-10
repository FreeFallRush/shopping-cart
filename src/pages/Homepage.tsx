import type { Product } from "../types/types";
import styles from "./Pages.module.css";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard/ProductCard";
import { Link, useOutletContext } from "react-router";

interface OutletContextType {
  addToCart: (product: Product) => void;
}

const Homepage: React.FC = () => {
  const { addToCart } = useOutletContext<OutletContextType>();
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;
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
        <h2>Featured Products</h2>
        <div className={styles.container}>
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </>
  );
};
export default Homepage;
