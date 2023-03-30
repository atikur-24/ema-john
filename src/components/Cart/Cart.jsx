import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <>
      <h5 className="cart-title">Order Summary</h5>
      <div className="cart-info">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: $ {}</p>
        <p>Total Shipping Charge: $ {}</p>
        <p>Tax: $ {}</p>
      </div>
      <h6 className="total-title">Grand Total: $ {}</h6>
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
