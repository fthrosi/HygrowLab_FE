import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function NavbarProfile() {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    navigate('/beranda');
  };
  return (
    <div className="py-[0.625rem] px-[2rem] w-full  flex justify-end rounded-md">
      <div className="flex gap-4">
        <div
          onClick={logout}
          className="size-[50px] rounded-full bg-off-white flex justify-center items-center">
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
