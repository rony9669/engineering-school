import React, { useState, useEffect } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import BlogQuestion from "../BlogQuestion/BlogQuestion";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Library.css";

const Library = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  const [text, setText] = useState("0");
  console.log(text);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  const handleAddToCartClick = (selectedProduct) => {
    // console.log(product);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    // addToDb(selectedProduct.id);
  };

  const handleClick = (event) => {
    localStorage.setItem("items", JSON.stringify(event));
    setText(event);
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    console.log(items);
    if (items) {
      setText(items);
    }
  }, []);
  return (
    <div>
      <div className="shop-container my-7  flex flex-col sm:flex-col md:flex-row lg:flex-row  ">
        <div>
          <div className="products-container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mr-4">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleAddToCartClick={handleAddToCartClick}
              ></Product>
            ))}
          </div>
          {/* <BlogQuestion></BlogQuestion> */}
        </div>
        <div className="cart-container grid grid-cols-1 mx-5">
          <Cart
            cart={cart}
            handleClick={handleClick}
            handleAddToCartClick={handleAddToCartClick}
            text={text}
          ></Cart>
        </div>
      </div>
      <BlogQuestion></BlogQuestion>
    </div>
  );
};

export default Library;
