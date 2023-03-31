import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({ cart }) => {
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

  const tax =  (totalPrice * 15 / 100);

  const grandTotal = (totalPrice + totalShippingCost + tax);

  return (
    <>
      <h5 className="cart-title">Order Summary</h5>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: $ {totalPrice}</p>
        <p>Total Shipping Charge: $ {totalShippingCost}</p>
        <p>Tax: $ {tax.toFixed(2)}</p>
      <h6 className="total-title">Grand Total: $ {grandTotal.toFixed(2)}</h6>
      <button className="cart-btn-common">
        Clear Cart <FontAwesomeIcon icon={faTrashCan} />{" "}
      </button>
      <button className="cart-btn-common review-btn">
        Review Order <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </>
  );
};

export default Cart;
