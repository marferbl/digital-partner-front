import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token")
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

export const getEvents = () => API.get(`/event`);
export const createEvent = (body) => API.post(`/event/create`, body);
export const updateEvent = (id, body) => API.put(`/event/update/${id}`, body);
export const deleteEvent = (id) => API.delete(`/event/delete/${id}`);
export const getEvent = (id) => API.get(`/event/${id}`);
export const getEventsByCorporate = () => API.get(`/event/events-by-corporate`);

