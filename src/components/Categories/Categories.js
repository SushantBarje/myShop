import { Button, ButtonBase } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useCategoriesHook } from "../../hooks/useCategoriesHook";
import "./Categories.css";

function Categories() {
  const { categories } = useCategoriesHook();
  return (
    <div className="categories">
      {categories.status == 200 &&
        categories?.message?.map((category, index) => (
          <p key={index}>{category}</p>
        ))}
    </div>
  );
}

export default Categories;
