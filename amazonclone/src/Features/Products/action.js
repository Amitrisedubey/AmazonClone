import { GET_PRODUCTS } from "./actionTypes";

export const getProduct = (data) => {
  return {
    type: GET_PRODUCTS,
    payload: data,
  };
};
