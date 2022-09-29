
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Cart.css'

const Cart = ({ btnOnClickHandler }) => {
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])
    return (
        <div className='cart-container'>
            {
                carts.map(cart => <Product 
                key = {cart.id}
                cart = {cart}
                btnOnClickHandler={btnOnClickHandler}
                ></Product>)
            }
        </div>
    );
};

export default Cart;