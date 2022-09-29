import React from "react";
import "./Product.css";

const Product = (props) => {
  const { handleAddToCartClick } = props;
  const { name, img, description, time, id } = props.product;

  //   console.log(props.product);

  return (
    <div>
      <div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Product;
