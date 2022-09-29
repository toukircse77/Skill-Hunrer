
import React, { useEffect, useState } from 'react';
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
            <h3>container</h3>
        </div>
    );
};

export default Cart;