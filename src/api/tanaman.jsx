import axiosInstance from './index'; 
export const TambahTanaman = async (formData) => {
    try {
        const response = await axiosInstance.post('/tanaman/tanaman', formData);
        return response.data;
    } catch (error) {
        console.error("Registrasi gagal:", error);
        throw error;
    }
};