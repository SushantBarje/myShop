import { Shop, ShoppingBag, ShoppingBagOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./Product.css";
function Product({ title, imageURL, description, price }) {
  return (
    <div className="product">
      <img src={imageURL} alt="" srcset="" />
      <div className="product__info">
        <div className="product__info__group1">
          <h3 className="product__info__title">{title}</h3>
          <h3 className="product__info__price">{price}</h3>
        </div>
        <p className="product__info__description">{description}</p>
      </div>
      <div className="product__buy">
        <ShoppingBagOutlined></ShoppingBagOutlined>
        <button>Buy</button>
      </div>
    </div>
  );
}

export default Product;
