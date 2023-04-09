import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({ cart, handleClearCart, children }) => {
  let totalPrice = 0;
  let totalShippingCost = 0;
  let quantity = 0;

  for(const product of cart) {
    // if(product.quantity === 0) {
    //   product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShippingCost = totalShippingCost + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax =  (totalPrice * 7 / 100);

  const grandTotal = (totalPrice + totalShippingCost + tax);

  return (
    <>
      <h5 className="cart-title">Order Summary</h5>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: $ {totalPrice}</p>
        <p>Total Shipping Charge: $ {totalShippingCost}</p>
        <p>Tax: $ {tax.toFixed(2)}</p>
      <h6 className="total-title">Grand Total: $ {grandTotal.toFixed(2)}</h6>
      <button onClick={ handleClearCart } className="clear-cart-btn">
        <span>Clear Cart</span> <FontAwesomeIcon icon={faTrashCan} />{" "}
      </button>
        {children}
    </>
  );
};
export default Cart;
