import { createContext } from "react";
import type { Product } from "../types/types";

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  updateCart: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

export const CartContext= createContext<CartContextType | null>(null);