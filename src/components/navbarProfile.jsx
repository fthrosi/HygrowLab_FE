import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function NavbarProfile() {
  const { setIsLoggedIn } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    <div className="py-[0.625rem] px-[2rem] w-full  flex justify-end rounded-md">
      <div className="flex gap-4">
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
            <img
              src="/assets/icons/avatar.png"
              alt=""
              className="rounded-full"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
