import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <nav>
        <div>EveryShop</div>
        <div>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>

            <Link to="/cart">Cart</Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
