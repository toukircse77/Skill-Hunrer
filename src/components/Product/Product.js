import React from 'react';
import './Product.css'

const Product = ({cart}) => {
    return (
        <div>
            <h2>name: {cart.title}</h2>
        </div>
    );
};

export default Product;