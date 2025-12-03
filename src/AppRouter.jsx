import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import User from './pages/User';
import Location from './pages/Location';

const AppRouter = () => {
  return (
    <BrowserRouter basename="/x-adv">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/location" element={<Location />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
