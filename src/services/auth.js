import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

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
export const changePassword = (email) =>
  API.post(`/user/send-new-password`, { email });
export const editPassword = (password) =>
  API.post(`/user/change-password`, { password });
export const verifyEmail = (id) =>
  API.put(`/user/verify-email`, { id });
export const updateMe = (body) =>
  API.put(`/user/update`, body);




