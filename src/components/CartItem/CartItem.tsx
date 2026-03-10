import { useState } from "react";
import type { Product } from "../../types/types";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import styles from "./CartItem.module.css";

interface CartItemProps {
  product: Product;
  updateCart: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

function CartItem({ product, updateCart, removeFromCart }: CartItemProps) {
  const [quantity, setQuantity] = useState<number>(product.quantity || 1);

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItemImg}
        src={product.image}
        alt={product.title}
      />
      <div>
        <p className={styles.cartItemTitle}>{product.title}</p>
        <p>Price: ${product.price}</p>
        <p>Subtotal: ${(product.price * quantity).toFixed(2)}</p>

        <QuantitySelector initial={quantity} onChange={setQuantity} />

        <div className={styles.cartItemBtns}>
          <button onClick={() => updateCart(product.id, quantity)}>
            Update
          </button>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
