import { useOutletContext } from "react-router";
import CartItem from "../components/CartItem/CartItem";
import type { Product } from "../types/types";

interface OutletContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateCart: (id: number, quantity: number) => void;
}

function CartPage() {
  const { cart, removeFromCart, updateCart } =
    useOutletContext<OutletContextType>();
  return (
    <>
      <div>
        <h1>Cart Page</h1>
        <div>
          {cart.length === 0 && (
            <p> Your cart is empty. Add something from Shop.</p>
          )}

          <div>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                removeFromCart={removeFromCart}
                updateCart={updateCart}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default CartPage;
