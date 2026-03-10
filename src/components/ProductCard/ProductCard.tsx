import { useState } from "react";
import styles from "./ProductCard.module.css";
import type { Product } from "../../types/types";
import Rating from "../Rating/Rating";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const [expanded, setExpanded] = useState(false);

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

        <div className={styles.infoGroup}>
          <Rating rate={product.rating.rate} count={product.rating.count} />
          <p className={styles.category}>{product.category}</p>
        </div>

        <p className={expanded ? styles.fullDescription : styles.description}>
          {product.description}
        </p>
        <button
          className={styles.readMore}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
    </>
  );
}

export default ProductCard;
