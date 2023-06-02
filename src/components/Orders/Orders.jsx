import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import './Order.css'
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard} from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handlerRemoveCart = (id) => {
        const remainingCart = cart.filter(pd => pd._id !== id)
        setCart(remainingCart);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='order-container'>
            <div className='review-container'>
                {cart.map(product => <ReviewItem key={product._id} product={product} handlerRemoveCart={handlerRemoveCart} />)}
            </div>
            <div className='cart-container order-summary'>
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link className='review-link-btn' to='/checkout'>
                        <button className='review-btn'>
                            <span>Proceed Checkout</span>
                            <FontAwesomeIcon icon={faCreditCard} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;