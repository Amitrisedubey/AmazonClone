import { SEARCH_DATA, STORE_DATA } from "./actionTypes";

export const storeData = (data) => ({
  type: STORE_DATA,
  payload: data,
});

export const searchData = (data) => ({
  type: SEARCH_DATA,
  payload: data,
});
