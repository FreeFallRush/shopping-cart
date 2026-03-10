import { Link } from "react-router";
import styles from "./Navbar.module.css";

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  return (
    <>
      <nav>
        <div className={styles.logo}>EveryShop</div>
        <div className={styles.links}>
          <ul className={styles.list}>
            <Link className={styles.link} to="/">
              Home
            </Link>
            <Link className={styles.link} to="/shop">
              Shop
            </Link>

            <Link className={styles.link} to="/cart">
              Cart <span className={styles.cartCount}>{cartCount}</span>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
