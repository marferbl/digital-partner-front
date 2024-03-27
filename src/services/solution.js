import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

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
export const updateSolution = (id, body) => API.put(`/solution/update/${id}`, body);
export const deleteSolution = (id) => API.delete(`/solution/delete/${id}`);
export const getAllSolutions = (queryParams) => {
  return API.get(`/solution/all`, { params: queryParams });
};
