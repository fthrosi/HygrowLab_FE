import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://hygrowlab.noturminesv.my.id", 
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