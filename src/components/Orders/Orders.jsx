import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import './Order.css'
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const cart = useLoaderData();

    return (
        <div className='order-container'>
            <div className='review-container'>
                {cart.map(product => <ReviewItem key={product.id} product={product} />)}
            </div>
            <div className='cart-container order-summary'>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Orders;