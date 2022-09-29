import React from 'react';
import './Product.css'

const Product = ({cart}) => {
    const {title,time,url,ratings} = cart;
    return (
        <div className='cart'>
            <img src={url} alt="" />
            <div className='cart-info'>
                <h2>Skill: {title}</h2>
                <p>Duration: {time} sec</p>
                <p>ratings: {ratings}</p>
            </div>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;