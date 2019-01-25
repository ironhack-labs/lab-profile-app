

const initialStore = {
  user: null
}

export const rootReducer = (store = initialStore, action) => {
  switch(action.type){
      case "ADD_MESSAGE":
          store = {
              ...store,
              messages: [action.message]
          }
      break;
      case "DELETE_ALL_MESSAGES":
          store = {
              ...store,
              messages: []
          }
      break;
      case "LOGIN":
          store = {
              ...store,
              user: action.user
          }
      break;
      case "LOGOUT":
          store = {
              ...store,
              user: null
          }
      break;
      default: return store
  }
 
  return store
}