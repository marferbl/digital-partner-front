import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token")
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

export const getCertificationsBySolution = (id) => API.get(`/certification/solution/${id}`);
export const createCertification = (body) => API.post(`/certification/create`, body);
