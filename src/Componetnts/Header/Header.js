import React from "react";
import "./Header.css";
import image from "../../images/logo.jpg";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-slate-800">
        <div className="flex-1">
          <h2 className="normal-case text-white text-lg font-bold">
            Engineering School
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
