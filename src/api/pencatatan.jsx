import axiosInstance from './index'; 
export const GetPencatatan = async (id) => {
    try {
        const response = await axiosInstance.get(`/recordings/${id}`);
        return response.data;
    } catch (error) {
        console.error("Gagal Menampilkan Data", error);
        throw error;
    }
}
export const Kalkulasi = async (formData) => {
    try {
        const response = await axiosInstance.post(`/kalkulasi`, formData);
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        throw error;
    }
}
export const tambahCatatan = async (formData) => {
    try{
        const response = await axiosInstance.post('/kalkulasi/add',formData);
        return response.data;
    }catch(error){
        throw error;
    }
}
export const ubahFoto = async (id,data) => {
    try {
        const response = await axiosInstance.put(`/recordings/foto/${id}`,data,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const editCatatan = async (id,data) => {
    try{
        const response = await axiosInstance.put(`/recordings/edit/${id}`,data);
        return response;
    }catch(error){
        console.error("Gagal Menampilkan Data", error);
        throw error;
    }
}