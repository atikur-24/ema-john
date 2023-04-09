import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect( () => {
    const storedCart = getShoppingCart();
    let saveCart = [];
    // step 1: get id of the addedProduct
    for(const id in storedCart) {
      // step 2: get product from products state by using id
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
        // step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added product to the saved cart
        saveCart.push(addedProduct)
      }
    }
    // set the cart
    setCart(saveCart);
  }, [products])

  const handlerAddToCart = (product) => {
    let newCart = [];
    //if product doesn't exist in the cart, then set quantity = 1
    const exist = cart.find(pd => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product]
    }
    else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart = [...remaining, exist];
    }
    setCart(newCart);
    addToDb(product.id);
  };

  const handleClearCart = () => {
    setCart([])
    deleteShoppingCart()
}

  return (
    <div className="shop-container">
      <div className="product-container">
        <div className="products">
          {products.map((product) => (
            <Product key={product.id} product={product} handlerAddToCart={handlerAddToCart}></Product>
          ))}
        </div>
      </div>

      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link className="review-link-btn" to='/orders'>
            <button className="review-btn">
              <span>Review Order</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
