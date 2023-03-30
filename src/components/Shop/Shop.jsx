import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    console.log(products);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    return (
        <div className='shop-container'>

            <div className='product-container'>
                <h1>Buys Shoes for Men</h1>
            </div>

            <div className='cart-container'>
                <h2>Order Summary</h2>
            </div>
            
        </div>
    );
};

export default Shop;