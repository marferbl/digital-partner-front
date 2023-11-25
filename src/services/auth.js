import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("token")).token
    }`;
  }

  return req;
});

export const signup = (email, password, name) =>
  API.post(`/user/signup`, { email, password, name });
export const login = (email, password) =>
  API.post(`/user/login`, { email, password });
export const getMe = () => API.get(`/user/me`);
