import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token")
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

export const getBlogs = () => API.get(`/blog/blogs`);
export const createBlog = (body) => API.post(`/blog/save`, body);
export const getBlogById = (id) => API.get(`/blog/blog/${id}`);
