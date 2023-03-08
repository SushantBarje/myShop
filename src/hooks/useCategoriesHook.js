import axios from "axios";
import React, { useEffect, useState } from "react";
import { getProductsCategories } from "../api-endpoint/api";
import { axiosInstance } from "../api-endpoint/axios";

export const useCategoriesHook = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getProductsCategories();
      setCategories(data);
    })();
  }, []);

  return { categories };
};
