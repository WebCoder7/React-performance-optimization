import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Cart.css';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
