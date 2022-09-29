
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Cart.css'

const Cart = () => {
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCarts(data))
        // console.log(carts)
    },[])
    return (
        <div className='cart-container'>
            {
                carts.map(cart => <Product 
                key = {cart.id}
                cart = {cart}
                ></Product>)
            }
        </div>
    );
};

export default Cart;