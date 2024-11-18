import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import NavbarProfile from '../components/navbarProfile';

export default function LandingLayout() {
  return (
    <div className="flex bg min-h-screen">
      <Sidebar />
      <div className="w-full  min-h-screen bg-off-white py-[2rem] px-[2.594rem]">
        <NavbarProfile />
        <Outlet />
      </div>
    </div>
  );
}
