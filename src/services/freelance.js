import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token")
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const getFreelance = () => API.get(`/freelance/me`);
export const updateFreelance = (body) => API.put('/freelance/update', body);
export const createFreelance = (body) => API.post(`/freelance/create`, body);
export const removeCorporate = (id) => API.get(`/freelance/update` + id);
