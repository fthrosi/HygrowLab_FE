import axiosInstance from './index';

export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Login gagal:', error);
    throw error;
  }
};

export const registerUser = async (formData) => {
  try {
    const response = await axiosInstance.post('/auth/register', formData);
    return response.data;
  } catch (error) {
    console.error('Registrasi gagal:', error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axiosInstance.get('/auth/logout');
    return response.data;
  } catch (error) {
    throw error;
  }
};
