import { useState } from "react";
import type { Product } from "../../types/types";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

interface CartItemProps {
  product: Product;
  updateCart: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

function CartItem({ product, updateCart, removeFromCart }: CartItemProps) {
  const [quantity, setQuantity] = useState<number>(product.quantity || 1);

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <div>
        <p>{product.title}</p>
        <p>Price: ${product.price}</p>
        <p>Subtotal: ${(product.price * quantity).toFixed(2)}</p>

        <QuantitySelector initial={quantity} onChange={setQuantity} />

        <div>
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
