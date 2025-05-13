import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token")
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const getVacancyCandidatesByCorporate = () => API.get(`/vacancy-candidates/by-corporate`);
export const getVacancyCandidatesById = (id) => API.get(`/vacancy-candidates/${id}`);
export const selectCandidate = (id, candidateId) => API.put(`/vacancy-candidates/select`, { id, candidateId });
export const discardCandidate = (id, candidateId) => API.put(`/vacancy-candidates/discard`, { id, candidateId });