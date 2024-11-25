import axios from 'axios';

const BASE_URL = "http://localhost:4000";

const axiosInstance = axios.create({
    baseURL: BASE_URL, 
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token'); 
        console.log(token); 
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error("Unauthorized, please login again.");
        } else {
            console.error("Terjadi kesalahan:", error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;