import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import UserPage from "./pages/User";
import LocationPage from "./pages/Location";

function App() {
  return (
    <BrowserRouter basename="/x-adv">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
