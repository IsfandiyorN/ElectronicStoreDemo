import axios from "axios";
const api_url = import.meta.env.VITE_BASE_URL;

const api = axios.create({
    baseURL: `${api_url}`
});

export default api