import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity } = useSelector(state => state.cart);

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Your Cart is Empty</h2>
        <Link to="/plants">
          <button>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Shopping Cart</h2>
      <p>Total Items: {totalQuantity}</p>

      {items.map(item => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
            padding: "10px 0",
            gap: "15px",
          }}
        >
          <img src={item.image} alt={item.name} width="80" />
          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p>Unit Price: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>
          </div>

          <div>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          </div>

          <button
            onClick={() => dispatch(removeItem(item.id))}
            style={{ marginLeft: "10px", color: "red" }}
          >
            Delete
          </button>
        </div>
      ))}

      <h3>Total Amount: ${totalAmount}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>

      <Link to="/plants">
        <button style={{ marginLeft: "10px" }}>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CartItem;