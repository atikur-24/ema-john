import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import './Order.css'
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handlerRemoveCart = (id) => {
        const remainingCart = cart.filter(pd => pd.id !== id)
        setCart(remainingCart);
        removeFromDb(id);
    }

    return (
        <div className='order-container'>
            <div className='review-container'>
                {cart.map(product => <ReviewItem key={product.id} product={product} handlerRemoveCart={handlerRemoveCart} />)}
            </div>
            <div className='cart-container order-summary'>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Orders;