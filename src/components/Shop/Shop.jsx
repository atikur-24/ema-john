import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage, setProductPerPage] = useState(10)
  const { totalProducts } = useLoaderData();
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];

  const options = [5, 10, 15, 20];
  const handleSelectChange = (e) => {
    setProductPerPage(parseInt(e.target.value));
    setCurrentPage(0)
  }

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${currentPage}&limit=${productsPerPage}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, productsPerPage]);

  useEffect( () => {
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);

    fetch('http://localhost:5000/productsByIds', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ids)
        
    })
    .then(res => res.json())
    .then(cartProducts => {
      let saveCart = [];
      // step 1: get id of the addedProduct
      for(const id in storedCart) {
        // step 2: get product from products state by using id
        const addedProduct = cartProducts.find(product => product._id === id);
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
    })
    

  }, [])

  const handlerAddToCart = (product) => {
    let newCart = [];
    //if product doesn't exist in the cart, then set quantity = 1
    const exist = cart.find(pd => pd._id === product._id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product]
    }
    else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter(pd => pd._id !== product._id);
      newCart = [...remaining, exist];
    }
    setCart(newCart);
    addToDb(product._id);
  };

  const handleClearCart = () => {
    setCart([])
    deleteShoppingCart()
}

  return (
    <>
    <div className="shop-container">
      <div className="product-container">
        <div className="products">
          {products.map((product) => (
            <Product key={product._id} product={product} handlerAddToCart={handlerAddToCart}></Product>
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
    {/* pagination */}
    <div className="pagination">
      {
        pageNumbers.map(number => <button 
          className={currentPage === number ? "selected pagination-btn" : "pagination-btn"}
           key={number}
           onClick={ () => setCurrentPage(number) }
           >
            {number}
           </button>)
      }
      <select value={productsPerPage} onChange={handleSelectChange}>
        {
          options.map(option => <option key={option} value={option}>
            {option}
          </option>)
        }
      </select>
    </div>
    </>
  );
};

export default Shop;
