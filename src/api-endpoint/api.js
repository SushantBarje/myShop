import { axiosInstance } from "./axios";

export const loginAction = async ({ request, params }) => {
  const data = await request.formData();
  const updates = Object.fromEntries(data);
  console.log(updates);
  return params;
};

export const registerAction = async ({ request, params }) => {
  const data = await request.formData();
  const updates = Object.fromEntries(data);
  console.log(updates);
  return params;
};

export const loadCategories = async () => {};

export const getProductsCategories = async () => {
  const response = await axiosInstance
    .get("/products/categories")
    .catch((error) => {
      console.log(error.response.data);
      console.log(error.response.status);
      return {
        status: error.response.status,
        message: error.response.data.message,
      };
    });
  return { status: response.status, message: response.data };
};

export const getAllProducts = async () => {
  const response = await axiosInstance
    .get("/products?limit=100")
    .catch((error) => {
      console.log(error.response.data);
      console.log(error.response.status);
      return {
        status: error.response.status,
        message: error.response.data.message,
      };
    });
  console.log(response.data);
  return { status: response.status, message: response.data };
};
