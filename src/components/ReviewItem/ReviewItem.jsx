import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt,  } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handlerRemoveCart }) => {
    const { id, img, name, price, quantity } = product;

    return (
        <div className='review-item'>
            <img src={img} alt="product" />
            <div className='review-details'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: <span className='text-orange'>${price}</span></p>
                <p>Order Quantity: <span className='text-orange'>{quantity}</span></p>
            </div>
            <button onClick={ () => handlerRemoveCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;