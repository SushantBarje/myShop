import React from "react";
import Categories from "../Categories/Categories";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <Categories
        categories={["All", "Electronics", "Men's", "Women's", "Kids"]}
      ></Categories>
    </div>
  );
}

export default Sidebar;
