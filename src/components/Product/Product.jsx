import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const  handlerAddToCart  = props.handlerAddToCart
  return (
    <div className="product">
      <img src={img} alt="shoe" />
      <div className="product-info">
        <h6 className="product-title">{name}</h6>
        <p className="product-price">Price: ${price}</p>
        <div className="product-dsc">
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} stars</p>
        </div>
      </div>
      <button onClick={ () => handlerAddToCart(props.product)} className="cart-btn">
        Add to Cart 
        <FontAwesomeIcon style={{marginLeft: '5px'}} icon={faShoppingCart} />
        </button>
    </div>
  );
};

export default Product;
