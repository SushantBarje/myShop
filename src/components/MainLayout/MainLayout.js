import React, { useState } from "react";
import { Outlet, redirect } from "react-router-dom";
import Header from "../Header/Header";
import Login from "../Login/Login";
import "./MainLayout.css";

function MainLayout({ children }) {
  const [isUser, setUser] = useState(false);

  return (
    <div className="mainLayout">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default MainLayout;
