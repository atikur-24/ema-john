import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handlerAddToCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart)
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        <h1>Buys Shoes for Men</h1>
        <div className="products">
          {products.map((product) => (
            <Product key={product.id} product={product} handlerAddToCart={handlerAddToCart}></Product>
          ))}
        </div>
      </div>

      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
