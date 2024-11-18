import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import NavbarProfile from "../components/navbarProfile";
import { useState } from "react";

export default function LandingLayout() {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className="flex min-h-screen overflow-x-auto">
      <Sidebar open={open} toggleSidebar={toggleSidebar}/>
      <div className="relative overflow-auto w-screen h-screen bg-[#F9FAFC] py-[2rem] px-[1rem]">
        <div className="flex items-center justify-between overflow-auto">
          <img src="/assets/icons/burger.png" alt="" className="xl:size-7 size-[1.5rem]" onClick={toggleSidebar}/>
          <NavbarProfile />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
