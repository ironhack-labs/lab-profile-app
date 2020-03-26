export const useUser = () => ({
  type: "USE_USER"
});

export const addUser = user => ({
  type: "ADD_USER",
  user
});
