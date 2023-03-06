import React from "react";
import "./Header.css";
import APP_LOGO from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={APP_LOGO} alt="" />
        <h3>MyShop</h3>
      </div>
      <div className="header__right">
        <Link to="/signup" className="header__right__sign__up__link">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Header;
