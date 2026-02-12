import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

// Import all plant images
import plant1 from "../assets/images/plants/plant1.jpg";
import plant2 from "../assets/images/plants/plant2.jpg";
import plant3 from "../assets/images/plants/plant3.jpg";
import plant4 from "../assets/images/plants/plant4.jpg";
import plant5 from "../assets/images/plants/plant5.jpg";
import plant6 from "../assets/images/plants/plant6.jpg";

// Add more imports if needed

const plantsData = [
  {
    category: "Indoor Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 15, image: plant1, link: "/plants/1" },
      { id: 2, name: "Spider Plant", price: 12, image: plant2, link: "/plants/2" },
      { id: 3, name: "Peace Lily", price: 18, image: plant3, link: "/plants/3" },
      { id: 4, name: "ZZ Plant", price: 20, image: plant4, link: "/plants/4" },
      { id: 5, name: "Pothos", price: 10, image: plant5, link: "/plants/5" },
      { id: 6, name: "Philodendron", price: 14, image: plant6, link: "/plants/6" },
    ],
  },
  // Add more categories if you want
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <div style={{ padding: "20px" }}>
      {plantsData.map(category => (
        <div key={category.category} style={{ marginBottom: "40px" }}>
          <h2>{category.category}</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {category.plants.map(plant => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "160px",
                  textAlign: "center",
                  borderRadius: "10px",
                  boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                  background: "#fff",
                  color: "#000",
                }}
              >
                {/* Clickable plant image */}
                <a href={plant.link}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="150"
                    style={{ cursor: "pointer", borderRadius: "10px" }}
                  />
                </a>
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isInCart(plant.id)}
                  style={{
                    marginTop: "5px",
                    width: "100%",
                    padding: "8px",
                    borderRadius: "20px",
                    background: isInCart(plant.id) ? "#ccc" : "#38a169",
                    color: "white",
                    cursor: isInCart(plant.id) ? "not-allowed" : "pointer",
                  }}
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;