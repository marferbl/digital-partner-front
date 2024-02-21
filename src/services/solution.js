import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token")
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const getSolutionsByCorporate = () => API.get(`/solution/by-corporate`);
export const createSolution = (body) => API.post(`/solution/create`, body);
export const getSolutionById = (id) => API.get(`/solution/details/${id}`);
export const getAllSolutions = () => API.get(`/solution/all`);
