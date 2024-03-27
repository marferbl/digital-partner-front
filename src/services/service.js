import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token")
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const getServiceByUserCorporate = () => API.get(`/service/by-corporate`);
export const createService = (body) => API.post(`/service/create`, body);
export const getServiceById = (id) => API.get(`/service/details/${id}`);
export const getAllServices = (queryParams) => API.get(`/service/all`, { params: queryParams });
export const updateService = (id, body) => API.put(`/service/update/${id}`, body);
export const getServicesBySolution = (id) => API.get(`/service/by-solution/${id}`);
export const deleteService = (id) => API.delete(`/service/delete/${id}`);
