import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_BACKEND_PUBLIC_API_URL}`;

const axiosInstance = axios.create({
    baseURL: BASE_URL, 
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
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
        console.log(error.response)
        if (error.response && error.response.status === 401) {
            console.error("Unauthorized, please login again.");
        } else {
            console.error("Terjadi kesalahan:", error.response);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;