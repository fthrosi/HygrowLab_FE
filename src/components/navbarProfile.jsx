import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function NavbarProfile() {
  const { setIsLoggedIn } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const id_user = sessionStorage.getItem('id_user');
    if (id_user) {
      setUserId(JSON.parse(id_user)); // Parse jika datanya berupa JSON
    }
    // Fungsi untuk mengambil data user dari API
    if (!userId) return;
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/profile/user/${userId}`
        ); // Panggil API
        setName(response.data.data[0].full_name); // Simpan data ke state
        setLoading(false); // Matikan loading
      } catch (err) {
        setError(err.message); // Tangkap error
        setLoading(false);
      }
    };

    fetchUsers(); // Panggil fungsi saat komponen dimuat
  }, [userId]);

  const handleLogout = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:4000/auth/logout');
      setTimeout(() => {
        sessionStorage.clear();
        setLoading(false); // Hentikan loading
        setIsLoggedIn(false);
        navigate('/beranda'); // Navigasi ke halaman lain
      }, 1000);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Terjadi kesalahan.');
      setLoading(false);
      console.log(error);
    }
  };

  // const logout = (e) => {
  //   e.preventDefault();
  //   setIsLoggedIn(false);
  //   navigate('/beranda');
  // };

  return (
<<<<<<< HEAD
        <div className="flex gap-4">
          <div className="xl:size-[3.125rem] size-[1.5rem] rounded-full bg-white flex justify-center items-center flex-shrink-0">
            <img src="/assets/icons/settings.png" alt="" />
          </div>
          <div className="xl:size-[3.125rem] size-[1.5rem] rounded-full bg-white flex justify-center items-center flex-shrink-0">
            <img src="/assets/icons/notif.png" alt="" />
          </div>
          <div className="xl:size-[3.125rem] size-[1.5rem] rounded-full bg-white flex justify-center items-center">
=======
    <div className="py-[0.625rem] px-[2rem] w-full  flex justify-end rounded-md">
      <div className="flex gap-4 items-center">
        <div
          onClick={handleLogout}
          className="size-[50px] rounded-full bg-off-white flex justify-center items-center hover:cursor-pointer">
          <img src="/assets/icons/settings.png" alt="" />
        </div>
        <div className="size-[50px] rounded-full bg-off-white flex justify-center items-center">
          <img src="/assets/icons/notif.png" alt="" />
        </div>
        <Link to={'/profile'}>
          <div className="size-[50px] rounded-full bg-off-white flex justify-center items-center">
>>>>>>> bad411d4d7ccbaf08ae630e1697975217a50f9c1
            <img
              src="/assets/icons/avatar.png"
              alt=""
              className="rounded-full"
            />
          </div>
<<<<<<< HEAD
        </div>
=======
        </Link>
        <h1 className="text-[25px] nunito font-bold">
          Selamat Datang, <span className="text-[rgb(16,185,129)]">{name}</span>
        </h1>
      </div>
    </div>
>>>>>>> bad411d4d7ccbaf08ae630e1697975217a50f9c1
  );
}
