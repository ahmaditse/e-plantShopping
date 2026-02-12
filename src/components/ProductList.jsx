import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantsData = [
  {
    category: "Indoor Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" },
      { id: 2, name: "Spider Plant", price: 12, image: "https://via.placeholder.com/100" },
      { id: 3, name: "Peace Lily", price: 18, image: "https://via.placeholder.com/100" },
      { id: 4, name: "ZZ Plant", price: 20, image: "https://via.placeholder.com/100" },
      { id: 5, name: "Pothos", price: 10, image: "https://via.placeholder.com/100" },
      { id: 6, name: "Philodendron", price: 14, image: "https://via.placeholder.com/100" },
    ],
  },
  {
    category: "Succulents",
    plants: [
      { id: 7, name: "Aloe Vera", price: 9, image: "https://via.placeholder.com/100" },
      { id: 8, name: "Jade Plant", price: 11, image: "https://via.placeholder.com/100" },
      { id: 9, name: "Haworthia", price: 8, image: "https://via.placeholder.com/100" },
      { id: 10, name: "Echeveria", price: 7, image: "https://via.placeholder.com/100" },
      { id: 11, name: "Cactus", price: 6, image: "https://via.placeholder.com/100" },
      { id: 12, name: "Sedum", price: 9, image: "https://via.placeholder.com/100" },
    ],
  },
  {
    category: "Outdoor Plants",
    plants: [
      { id: 13, name: "Rose Bush", price: 25, image: "https://via.placeholder.com/100" },
      { id: 14, name: "Lavender", price: 22, image: "https://via.placeholder.com/100" },
      { id: 15, name: "Hibiscus", price: 24, image: "https://via.placeholder.com/100" },
      { id: 16, name: "Bougainvillea", price: 30, image: "https://via.placeholder.com/100" },
      { id: 17, name: "Geranium", price: 18, image: "https://via.placeholder.com/100" },
      { id: 18, name: "Jasmine", price: 26, image: "https://via.placeholder.com/100" },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Plants</h2>

      {plantsData.map(category => (
        <div key={category.category}>
          <h3>{category.category}</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {category.plants.map(plant => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "160px",
                  textAlign: "center",
                }}
              >
                <img src={plant.image} alt={plant.name} width="100" />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isInCart(plant.id)}
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