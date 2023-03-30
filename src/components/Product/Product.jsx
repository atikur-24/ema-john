import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
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
      <button className="cart-btn">Add to Cart </button>
    </div>
  );
};

export default Product;
