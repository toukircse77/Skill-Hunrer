
import { faCarTunnel } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'

const Card = ({cart}) => {
    let quantity =0;
    let total= 0;
    let shipping=0;
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='Cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: ${quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: {grandTotal}</h5>

        </div>
    );
};

export default Card;