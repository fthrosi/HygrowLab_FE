import axiosInstance from "./index";

export const getData = async () => {
  try {
    const response = await axiosInstance.get(`/profile/user`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateData = async (data) => {
  try {
    const response = await axiosInstance.put(`/profile/user`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updatePassword = async (data) => {
  try {
    const response = await axiosInstance.put(`/profile/updatepass`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateImage = async (formData) => {
  try {
    const response = await axiosInstance.put(`/profile/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Login gagal:", error);
    throw error;
  }
};
