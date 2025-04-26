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
export const getFreelanceById = (id) => API.get(`/freelance/details/${id}`);
export const getAllTalents = (queryParams) => API.get(`/freelance/talents`, { params: queryParams });
export const searchTalents = (params) => {
  // Construir la URL con parámetros de búsqueda
  let url = `/api/talents?`;
  if (params.position) url += `position=${encodeURIComponent(params.position)}&`;
  if (params.location) url += `location=${encodeURIComponent(params.location)}&`;
  if (params.salary) url += `salary=${encodeURIComponent(params.salary)}&`;
  if (params.technologies && params.technologies.length > 0) {
    params.technologies.forEach(tech => {
      url += `technologies=${encodeURIComponent(tech)}&`;
    });
  }
  // Eliminar el último & si existe
  url = url.endsWith('&') ? url.slice(0, -1) : url;

  return API.get(url);
};

// Searches
export const createSearch = (body) => API.post(`/api/searches`, body);
export const getUserSearches = (userId) => API.get(`/api/searches/user/${userId}`);

// Saved Talents
export const saveTalent = (body) => API.post(`/api/saved-talents`, body);
export const getSavedTalents = (recruiterId) => API.get(`/api/saved-talents/recruiter/${recruiterId}`);
export const removeSavedTalent = (recruiterId, talentId) =>
  API.delete(`/api/saved-talents`, { data: { recruiterId, talentId } });
