import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token")
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const signup = (email, password, name, rol) =>
  API.post(`/user/signup`, { email, password, name, rol });
export const login = (email, password) =>
  API.post(`/user/login`, { email, password });
export const getMe = () => API.get(`/user/me`);
