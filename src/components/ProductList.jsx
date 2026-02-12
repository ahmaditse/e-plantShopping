import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

// Plant images
import plant1 from "../assets/images/plants/plant1.jpg";
import plant2 from "../assets/images/plants/plant2.jpg";
import plant3 from "../assets/images/plants/plant3.jpg";
import plant4 from "../assets/images/plants/plant4.jpg";
import plant5 from "../assets/images/plants/plant5.jpg";
import plant6 from "../assets/images/plants/plant6.jpg";

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
  // Add more categories if needed
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <div className="product-list-container" style={{ padding: "20px" }}>
      {plantsData.map(category => (
        <div key={category.category} style={{ marginBottom: "40px" }}>
          <h2 style={{ marginBottom: "20px" }}>{category.category}</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {category.plants.map(plant => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "15px",
                  width: "180px",
                  textAlign: "center",
                  borderRadius: "10px",
                  boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                  background: "#fff",
                  color: "#000",
                  transition: "transform 0.2s",
                }}
              >
                <a href={plant.link}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="160"
                    style={{ cursor: "pointer", borderRadius: "10px" }}
                  />
                </a>
                <h4 style={{ margin: "10px 0 5px" }}>{plant.name}</h4>
                <p style={{ margin: "5px 0", fontWeight: "bold" }}>${plant.price}</p>
                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isInCart(plant.id)}
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "8px",
                    borderRadius: "20px",
                    background: isInCart(plant.id) ? "#ccc" : "#38a169",
                    color: "white",
                    cursor: isInCart(plant.id) ? "not-allowed" : "pointer",
                    fontWeight: "bold",
                    transition: "background 0.3s",
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