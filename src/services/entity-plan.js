import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token")
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

// Get all entity plans
export const getAllEntityPlans = () => API.get(`/entity-plans`);

// Get a specific entity plan
export const getEntityPlan = (id) => API.get(`/entity-plans/${id}`);

// Get all entity plans by entity id
export const getEntityPlansByEntityId = (entityId, entityModel) => API.get(`/entity-plans/entity/${entityId}/${entityModel}`);

// Create a new entity plan
export const createEntityPlan = (body) => API.post(`/entity-plans`, body);

// Update an entity plan
export const updateEntityPlan = (id, body) => API.put(`/entity-plans/${id}`, body);

// Delete an entity plan
export const deleteEntityPlan = (id) => API.delete(`/entity-plans/${id}`);
