const initialState = {
  loading: false,
  user: {},
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST":
      return {
        ...state,
        loading: true
      };
    case "SUCCESS":
      return {
        loading: false,
        user: action.user,
        error: ""
      };
    case "FAILURE":
      return {
        loading: false,
        phones: [],
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
