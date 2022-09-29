import React from "react";
import BreakTime from "../BreakTime/BreakTime";
import MyInfo from "../MyInfo/MyInfo";
import "./Cart.css";
import Swal from "sweetalert2";

const Cart = (props) => {
  const { cart, handleClick, text, handleAddToCartClick } = props;
  let totalTime = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    totalTime = totalTime + product.time * product.quantity;
  }
  const showAlert = () => {
    Swal.fire("Good job!", "Your Activity is Completed", "success");
  };

  return (
    <div className="cart bg-blue-100 pb-7 rounded-xl">
      <div>
        <MyInfo></MyInfo>
      </div>
      <div></div>
      <div>
        <h3 className="reading-summary">Reading summary</h3>
        <div className="reading-time">
          <h4>Reading Time in (minute) : {totalTime} </h4>
          <h4>Break Time in (minute) : {text}</h4>
        </div>
      </div>
      <button onClick={showAlert} className="btn-activity">
        Activity Completed
      </button>
    </div>
  );
};

export default Cart;
