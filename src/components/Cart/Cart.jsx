import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShippingCost = 0;

  for(const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShippingCost = totalShippingCost + product.shipping;
  }

  const tax =  (totalPrice * 15 / 100);

  const grandTotal = (totalPrice + totalShippingCost + tax);

  return (
    <>
      <h5 className="cart-title">Order Summary</h5>
        <p>Selected Items: {cart.length}</p>
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
