import React from "react";
import Product from "../Product/Product";
import "./ProductsList.css";
import { useGetProductsHook } from "../../hooks/useGetProductsHook";

function ProductsList() {
  const { products } = useGetProductsHook();
  return (
    <div className="productsList">
      {products.status == 200 &&
        products?.message?.products?.map((product) => (
          <Product
            title={product.title}
            imageURL={product.images[0]}
            description={product.description}
            price={product.price}
          ></Product>
        ))}
      <Product
        title={"iPhone 9"}
        imageURL={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
        description={"An apple mobile which is nothing like apple"}
        price={549}
      ></Product>
      <Product
        title={"iPhone 9"}
        imageURL={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
        description={"An apple mobile which is nothing like apple"}
        price={549}
      ></Product>
      <Product
        title={"iPhone 9"}
        imageURL={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
        description={"An apple mobile which is nothing like apple"}
        price={549}
      ></Product>
      <Product
        title={"iPhone 9"}
        imageURL={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
        description={"An apple mobile which is nothing like apple"}
        price={549}
      ></Product>
      <Product
        title={"iPhone 9"}
        imageURL={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
        description={"An apple mobile which is nothing like apple"}
        price={549}
      ></Product>
      <Product
        title={"iPhone 9"}
        imageURL={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
        description={"An apple mobile which is nothing like apple"}
        price={549}
      ></Product>
    </div>
  );
}

export default ProductsList;
