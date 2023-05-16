import { legacy_createStore as createStore } from "redux";
import { reducer } from "../Features/Products/reducer";

export const store = createStore(reducer);
