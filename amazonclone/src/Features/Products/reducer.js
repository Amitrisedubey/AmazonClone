import { GET_PRODUCTS } from "./actionTypes";
const initState = { data: [] };
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
