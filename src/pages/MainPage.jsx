import Nav from "../components/productsComponents/Nav";
import { Routes, Route, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import HomePage from "./HomePage";
import Products from "./Products";
import Footer from "../components/productsComponents/Footer";
import SingleProduct from "./SingleProduct";
import { useState } from "react";

const MainPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  return (
    <div className="max-w-screen-xl m-auto mt-10 px-5 max-sm:mt-5">
      <Nav cart={cart} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={<Products cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} navigate={navigate} />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainPage;
