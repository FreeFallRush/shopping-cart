import styles from "./ProductCard.module.css";
import type { Product } from "../../types/types";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <div className={styles.card}>
        <img src={product.image} alt={product.title} />
      </div>
    </>
  );
}

export default ProductCard;
