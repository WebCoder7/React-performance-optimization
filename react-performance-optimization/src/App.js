import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

function App() {
  const products = [
    { id: 1, name: 'Apple', description: 'red' },
    { id: 2, name: 'Banan', description: 'yellow' },
    
    { id: 2, name: 'Gilos', description: 'qizil' },
    { id: 2, name: 'Tarvuz', description: 'qizil' },
  ];

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={
          <div style={{display: 'flex'}} className="product-list">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        } />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
