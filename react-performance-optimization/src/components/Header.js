import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Header.css';

function Header() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="header">
      <h1>My Store</h1>
      <div onClick={() => navigate('/cart')} className="cart-icon">
        <img src="/favicon.ico" alt="Cart" />
        <span>{cartItems.length}</span>
      </div>
    </header>
  );
}

export default Header;
