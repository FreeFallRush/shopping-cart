import { useOutletContext } from "react-router";
import CartItem from "../components/CartItem/CartItem";
import type { Product } from "../types/types";
import styles from "./Pages.module.css";

interface OutletContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateCart: (id: number, quantity: number) => void;
}

function CartPage() {
  const { cart, removeFromCart, updateCart } =
    useOutletContext<OutletContextType>();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity!,
    0,
  );
  const vat = total * 0.2;
  const grandTotal = total + vat;

  const handleProceed = () => {
    alert(
      "This is an exercise project and not an actual shop. No real payment will be processed.",
    );
  };
  return (
    <>
      <h1>Cart Page</h1>

      <div className={styles.cartContainer}>
        {cart.length === 0 && (
          <p className={styles.emptyText}>
            Your cart is empty. Add something from Shop.
          </p>
        )}

        <div className={styles.cartItemsContainer}>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              removeFromCart={removeFromCart}
              updateCart={updateCart}
            />
          ))}
        </div>

        {cart.length > 0 && (
          <div className={styles.cartSummary}>
            <h2>Order Summary</h2>
            <p>Total: ${total.toFixed(2)}</p>
            <p>VAT (20%): ${vat.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>

            <button className={styles.proceedBtn} onClick={handleProceed}>
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default CartPage;
