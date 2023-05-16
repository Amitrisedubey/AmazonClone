import { ADD_ITEM, DELETE_ITEM } from "./actionTypes";

export const addCart = (product) => {
  return {
    type: ADD_ITEM,
    payload: product,
  };
};

export const delCart = (product) => {
  return {
    type: DELETE_ITEM,
    payload: product,
  };
};
