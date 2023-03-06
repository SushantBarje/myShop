import React, { useEffect, useState } from "react";
import "./Header.css";
import APP_LOGO from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [whichLink, setWhichLinkButton] = useState("Sign In");

  useEffect(() => {
    if (location.pathname == "/signup") {
      setWhichLinkButton({ to: "/login", text: "Log In" });
    } else {
      setWhichLinkButton({ to: "/signup", text: "Sign Up" });
    }
  }, [location]);
  return (
    <div className="header">
      <div className="header__left">
        <img src={APP_LOGO} alt="" />
        <h3>MyShop</h3>
      </div>
      <div className="header__right">
        <Link to={whichLink.to} className="header__right__sign__up__link">
          {whichLink.text}
        </Link>
      </div>
    </div>
  );
}

export default Header;
