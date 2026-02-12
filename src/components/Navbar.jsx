import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/images/nursery.jpg";

const Navbar = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <div className="navbar">
      {/* Logo left-aligned */}
      <Link to="/">
        <img src={logo} alt="Paradise Nursery" />
      </Link>

      {/* Links right-aligned */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart 🛒 ({totalQuantity})</Link>
      </div>
    </div>
  );
};

export default Navbar;