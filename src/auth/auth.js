export const login = (role) => {
  localStorage.setItem("role", role);
};

export const getRole = () => {
  return localStorage.getItem("role");
};

export const logout = () => {
  localStorage.clear();
  window.location.href = "/login";
};
