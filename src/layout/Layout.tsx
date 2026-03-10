import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import type { Product } from "../types/types";
import styles from "./Layout.module.css";

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
    <div className={styles.appWrapper}>
      <Navbar cartCount={cartCount} />
      <main className={styles.appMain}>
        <Outlet context={{ cart, addToCart, removeFromCart, updateCart }} />
      </main>

      <footer className={styles.footer}>
        <p>All rights reserved © EveryShop, 2026.</p>
      </footer>
    </div>
  );
}

export default Layout;
