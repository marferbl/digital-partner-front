import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token")
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const getCorporate = () => API.get(`/corporate/owner`);
export const createCorporate = (body) => API.post(`/corporate/create`, body);
export const removeCorporate = (id) => API.get(`/corporate/owner` + id);
