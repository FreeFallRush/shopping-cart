import { useState } from "react";
import { CartContext } from "./CartContext";
import type { Product } from "../types/types";

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + (product.quantity || 1),
              }
            : item,
        );
      }
      return [...prev, product];
    });
  }

  function updateCart(id: number, quantity: number) {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  }
  function removeFromCart(id: number) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
