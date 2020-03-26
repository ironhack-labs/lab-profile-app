export const useUser = () => ({
  type: "USE_USER"
});

export const useLogout = () => ({
  type: "USE_LOGOUT"
});

export const addUser = user => ({
  type: "ADD_USER",
  user
});
