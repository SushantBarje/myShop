import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api-endpoint/api";

export const useGetProductsHook = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAllProducts();
      setProducts(response);
    })();
  }, []);

  return { products };
};
