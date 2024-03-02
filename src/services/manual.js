import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token")
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const getManualsBySolution = (id) => API.get(`/manual/by-solution/${id}`);
export const createManual = (formData) => {
  return API.post(`/manual/create`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
export const getManualById = (id) => API.get(`/manual/${id}`);
export const getAllManuals = () => API.get(`/manual`);

