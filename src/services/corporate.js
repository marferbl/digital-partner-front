import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

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
export const updateCorporate = (body) => API.put(`/corporate/update`, body);
export const getApplications = (id) => API.get(`/corporate/applications/${id}`);
export const getEntitiesByCorporate = () => API.get(`/corporate/entities-by-corporate`);
