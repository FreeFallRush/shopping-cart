import { useState } from "react";
import styles from "./ProductCard.module.css";
import type { Product } from "../../types/types";
import Rating from "../Rating/Rating";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

function ProductCard({ product, addToCart }: ProductCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);

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

        <QuantitySelector initial={1} onChange={setQuantity} />
        <button onClick={() => addToCart({ ...product, quantity })}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
