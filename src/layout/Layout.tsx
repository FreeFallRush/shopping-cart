import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import type { Product } from "../types/types";

interface LayoutProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateCart: (id: number, quantity: number) => void;
}

function Layout({
  cart = [],
  addToCart,
  removeFromCart,
  updateCart,
}: LayoutProps) {
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <main>
        <Outlet context={{ cart, addToCart, removeFromCart, updateCart }} />
      </main>

      <footer>
        <p>©EveryShop, 2026 . All rights reserved to the imagination.</p>
      </footer>
    </div>
  );
}

export default Layout;
