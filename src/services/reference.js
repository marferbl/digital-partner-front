import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token")
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

export const getReferences = (id) => API.get(`/reference/references/${id}`);
export const createReference = (body) => API.post(`/reference/create`, body);
export const sendReference = (body) => API.post(`/reference/send`, body);
export const finishReference = (body) => API.post(`/reference/answer-reference`, body);
export const getReferencesByEntityDetail = (params) => API.get(`/reference/references-by-entity`, { params });