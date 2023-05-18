import { ADD_ITEM, DELETE_ITEM } from "./actionTypes";

export const addtoCart = (data) => {
  return {
    type: ADD_ITEM,
    payload: data,
  };
};

export const deletetoCart = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};
