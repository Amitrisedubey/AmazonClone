import { SEARCH_DATA, STORE_DATA } from "./actionTypes";
const initState = { data: [], search: [] };
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case STORE_DATA:
      return {
        ...state,
        data: payload,
      };
    case SEARCH_DATA:
      const newState = {
        ...state,
        search:
          state.data &&
          state.data.filter((el) =>
            el.title.toLowerCase().includes(payload.title.toLowerCase())
          ),
      };
      return newState;
    default:
      return state;
  }
};
