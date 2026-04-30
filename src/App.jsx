import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./components/navbar/NAvbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import Productdetail from "./pages/productdetail/Productdetail";
import Wishlist from "./pages/wishlist/Wishlist";

import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Account from "./pages/account/Account";
import Contact from "./pages/contact/Contact";
import { getcategory, getproductlist } from "./service";
export const DataContext = createContext();
function App() {
  const [categoryData, setcategoryData] = useState();
  const [productData, setproductdata] = useState();
  const [token, settokenslar] = useState();
  useEffect(() => {
    getcategory().then((data) => {
      setcategoryData(data);
    });
    getproductlist().then((item) => {
      setproductdata(item);
    });
  }, [token]);
  return (
    <>
      <BrowserRouter>
        <DataContext.Provider value={{ categoryData, productData, token, settokenslar }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/productdetail/:id" element={<Productdetail />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/acount" element={<Account />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </DataContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
