export const useUser = () => ({
  type: "USE_USER"
});

export const useSetUser = user => ({
  type: "SET_USER",
  user
});

export const useLogout = () => ({
  type: "USE_LOGOUT"
});
