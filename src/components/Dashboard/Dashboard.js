import { ButtonBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import ProductsList from "../ProductsList/ProductsList";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  const [isUser, setUser] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUser) {
      console.log("not");
      navigate("login");
    }
    return;
  }, []);

  return (
    <div className="dashboard">
      <Sidebar></Sidebar>

      <div className="product__list__container">
        <h2>All Products</h2>
        <ProductsList></ProductsList>
      </div>
    </div>
  );
}

export default Dashboard;
