import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import styles from "./Layout.module.css";
import { useCart } from "../hooks/useCart";

function Layout() {
  const { cart } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <div className={styles.appWrapper}>
      <Navbar cartCount={cartCount} />
      <main className={styles.appMain}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>All rights reserved © EveryShop, 2026.</p>
      </footer>
    </div>
  );
}

export default Layout;
