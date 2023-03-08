import React, { useEffect, useState } from "react";
import "./Header.css";
import APP_LOGO from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useHeaderHook } from "../../hooks/useHeaderHook";

function Header() {
  const { whichButton } = useHeaderHook();
  console.log(whichButton);
  console.log(whichButton.text == "Sign Up");
  console.log(whichButton.text == "Log In");
  return (
    <div className="header">
      <div className="header__left">
        <img src={APP_LOGO} alt="" />
        <h3>MyShop</h3>
      </div>
      <div className="header__right">
        {whichButton.text == "Sign Up" || whichButton.text == "Log In" ? (
          <Link to={whichButton.to} className="header__right__sign__up__link">
            {whichButton.text}
          </Link>
        ) : (
          <>
            <Link to="/myorder" className="header__right__nav__link">
              My Orders
            </Link>
            <Link to="/logout" className="header__right__sign__up__link">
              Log out
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
