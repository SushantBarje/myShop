import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../Login/Login";
import "./MainLayout.css";

function MainLayout({ children }) {
  return (
    <div className="mainLayout">
      <Login></Login>
    </div>
  );
}

export default MainLayout;
