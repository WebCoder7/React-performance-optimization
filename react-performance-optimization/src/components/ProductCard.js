import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice';
import '../styles/ProductCard.css';

function ProductCard({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };

    return (
        <div className="product_paren">
            <div className="product-card">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button onClick={handleAddToCart}>Add</button>
            </div>
        </div>
    );
}

export default ProductCard;
