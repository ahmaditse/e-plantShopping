import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <nav style={{ padding: "10px", background: "#2f855a", color: "white" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
      <Link to="/plants" style={{ marginRight: "15px", color: "white" }}>Plants</Link>
      <Link to="/cart" style={{ color: "white" }}>
        Cart 🛒 ({totalQuantity})
      </Link>
    </nav>
  );
};

export default Navbar;