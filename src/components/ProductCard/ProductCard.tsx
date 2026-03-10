import styles from "./ProductCard.module.css";
import type { Product } from "../../types/types";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <div className={styles.card}>
        <img
          className={styles.cardImg}
          src={product.image}
          alt={product.title}
        />
        <h3>{product.title}</h3>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.category}>{product.category}</p>
      </div>
    </>
  );
}

export default ProductCard;
