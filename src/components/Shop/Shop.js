import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Card from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [Products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    useEffect(()=>{
      const storedCart =  getStoredCart();
      const savedCart = [];
      for(const id in storedCart){
        const addedProduct = Products.find(product => product.id === id)
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
      }
      setCart(savedCart);
    },[Products])
    const hundleAddtoCart =(SelectedProduct)=>{
        let newCart = [];
        const exists = cart.find(product => product.id === SelectedProduct.id);
        if(!exists){
            SelectedProduct.quantity = 1;
            newCart = [...cart,SelectedProduct]
        }
        else{
            const rest = cart.filter(product=>product.id !== SelectedProduct.id);
            exists.quantity = exists.quantity + 1 ;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(SelectedProduct.id);
    }
    return (
        <div className='Shop-container'>
            <div className='Products-container'>
        {
            Products.map(product => <Product 
            key = {product.id}
            product = {product}
            hundleAddtoCart={hundleAddtoCart}
            
            ></Product>)
        }
            </div>
            <div className="Cart-container">
            <Card cart={cart}></Card>
            </div>
        </div>
    );
};

export default Shop;