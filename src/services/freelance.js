import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token")
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const getFreelance = () => API.get(`/freelance/me`);
export const createFreelance = (body) => API.post(`/freelance/create`, body);
export const removeCorporate = (id) => API.get(`/freelance/update` + id);
