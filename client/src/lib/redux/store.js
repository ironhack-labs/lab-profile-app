import { createStore } from "redux";
import { rootReducer } from "./reducer";
import { AuthAPI } from "../auth";

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

AuthAPI.currentUser().then(user =>
  user ? store.dispatch({ type: "LOGIN", user }) : null
);
