import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token")
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

export const getFavorites = (queryParams) => {
    return API.get(`/favorite`, { params: queryParams });
};
export const addFavorite = (entity) => API.post(`/favorite/add`, { entity });
