import { createStore } from "redux";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, user: action.user };
    case "USE_USER":
      return state.user;

    case "USE_USER":
      return { ...state, user: undefined };
  }
  return state;
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
