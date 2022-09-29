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
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={image} alt="" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
