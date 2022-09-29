import React from "react";
import "./Product.css";

const Product = (props) => {
  const { handleAddToCartClick } = props;
  const { name, img, description, time } = props.product;

  //   console.log(props.product);

  return (
    <div>
      <div>
        <div className="">
          <div className="card mx-3 my-3 w-[280px] bg-base-100 shadow-xl h-[500px] border-gray-700 product">
            <figure className="px-10 pt-10">
              <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h1 className="card-title">{name}</h1>
              <p>{description}</p>
              <h4 className="font-weight-bold">Time in minute:{time}</h4>

              <div className="card-actions">
                <button
                  onClick={() => handleAddToCartClick(props.product)}
                  className="btn btn-primary"
                >
                  Add to List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
