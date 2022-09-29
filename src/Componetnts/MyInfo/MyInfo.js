import React from "react";
import "./MyInfo.css";
import image from "../../images/rony.jpg";

const MyInfo = () => {
  return (
    <div>
      <div className="main-info">
        <img className="my-image" src={image} alt="R" />
        <h3 className="my-title">Rony Chowdhury</h3>
      </div>
      <div className="info">
        <div>
          <h4>Height </h4>
          <p>6 feet</p>
        </div>
        <div>
          <h4>Weight </h4>
          <p>79kg</p>
        </div>
        <div>
          <h4>Age </h4> <p>25 Years</p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
