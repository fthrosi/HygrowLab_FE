import axiosInstance from './index';

export const getData = async (id) => {
  try {
    const response = await axiosInstance.get(`/profile/user/${id}`);
    return response.data;
  } catch (error) {
    console.error('Login gagal:', error);
    throw error;
  }
};
export const updateData = async (id, data) => {
  try {
    const response = await axiosInstance.patch(`/profile/user/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Login gagal:', error);
    throw error;
  }
};
export const updatePassword = async (id, data) => {
  try {
    const response = await axiosInstance.patch(
      `/profile/updatepass/${id}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error('Login gagal:', error);
    throw error;
  }
};
export const updateImage = async (id, formData) => {
  try {
    const response = await axiosInstance.patch(
      `/profile/upload/${id}`,
      formData,
      {
        headers: {},
      }
    );

    return response.data;
  } catch (error) {
    console.error('Login gagal:', error);
    throw error;
  }
};
