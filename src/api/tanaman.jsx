import axiosInstance from './index'; 
export const TambahTanaman = async (formData) => {
    try {
        const response = await axiosInstance.post('/tanaman/tanaman', formData);
        return response.data;
    } catch (error) {
        console.error("Gagal menambahkan Tanaman", error);
        throw error;
    }
};
export const GetTanaman = async () => {
    try {
        const response = await axiosInstance.get('/tanaman/tanaman');
        return response.data;
    } catch (error) {
        console.error("Gagal Menampilkan Data", error);
        throw error;
    }
}
export const GetListTanaman = async () => {
    try {
        const response = await axiosInstance.get('/tanaman/list');
        return response.data;
    } catch (error) {
        console.error("Gagal Menampilkan Data", error);
        throw error;
    }
}
export const DeleteTanaman = async (id) =>{
    try {
        const response = await axiosInstance.delete(`/tanaman/tanaman/${id}`);
        return response.data;
    } catch (error) {
        console.error("Gagal Menampilkan Data", error);
        throw error;
    }
}

export const GetRecord = async () => {
    try{
        const response = await axiosInstance.get(`/profile/record`);
        return response.data;
    }catch(error){
        throw error;
    }
}
export const GetPlants = async () => {
    try{
        const response = await axiosInstance.get(`/profile/plants`);
        return response.data;
    }catch(error){
        throw error;
    }
}
export const GetChart = async () => {
    try{
        const response = await axiosInstance.get(`/profile/chart`);
        return response.data;
    }catch(error){
        throw error;
    }
}