import { ADD_ITEM } from "./actionTypes";
const initialState = {
  cartItems: [],
};
export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      const newItem = payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        //if the item is already in the cart , update its quantity
        const updatedItems = state.cartItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cartItems: updatedItems };
      } else {
        //if the item is new , add it to the cart
        const newItems = [...state.cartItems, { ...newItem, quantity: 1 }];
        return { ...state, cartItems: newItems };
      }
    default:
      return state;
  }
};
