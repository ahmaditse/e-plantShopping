import { useState } from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="background-image">
      <Navbar />

      {!showProducts ? (
        <>
          <AboutUs />
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <button
              className="get-started-button"
              onClick={() => setShowProducts(true)}
            >
              Get Started
            </button>
          </div>
        </>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
