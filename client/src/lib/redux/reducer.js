const initialStore = {
  user: null
};

export const rootReducer = (store = initialStore, action) => {
  switch (action.type) {
    case "SIGNUP":
      store = { ...store, user: action.user.data.user };
      break;
    case "LOGIN":
      store = { ...store, user: action.user.data.user };
      break;
    default:
      return store;
  }
  return store;
};
