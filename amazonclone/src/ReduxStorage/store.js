import {
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { reducer } from "../Features/Products/reducer";
import { cartReducer } from "../Features/Cart/reducer";
const mainReducer = combineReducers({
  productState: reducer,
  cartState: cartReducer,
});
export const store = createStore(
  mainReducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__())
);
