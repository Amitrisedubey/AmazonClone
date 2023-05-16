import { legacy_createStore as createStore } from "redux";
import { reducer } from "./Product/reducer";

export const store = createStore(reducer);
