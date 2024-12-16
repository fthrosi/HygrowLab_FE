import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import NavbarProfile from "../components/navbarProfile";
import { SidebarProvider } from "../context/sidebarContext";
import { useState } from "react";
import ModalLogout from "../components/modalLogout";
import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../api/auth";
import { toast } from "sonner";

export default function LandingLayout() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const tutup = () => {
    setShow(!show);
  };
  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logout Berhasil");
      setTimeout(() => {
        logout();
        navigate("/beranda");
      }, 2000);
    } catch (error) {
      console.log
      toast.error("Logout Gagal");
    }
  };
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <SidebarProvider open={open} toggleSidebar={toggleSidebar}>
      <div className="flex min-h-screen overflow-x-auto">
        <Sidebar open={open} toggleSidebar={toggleSidebar} tutup={tutup} />
        {show && <ModalLogout tutup={tutup} handleLogout={handleLogout} />}
        <div
          className={`${
            open ? "flex-shrink-0 lg:flex-shrink" : ""
          } w-screen min-h-screen bg-off-white`}
        >
          <div className="flex items-center justify-between overflow-auto px-2 md:px-5 md:pt-8 lg:pt-11 pt-7 ">
            {open ? (
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 lg:size-6 flex-shrink-0"
                onClick={toggleSidebar}
              >
                <path
                  d="M1.0816 21.1761C-0.360534 22.738 -0.360534 25.2745 1.0816 26.8364L19.5409 46.8286C20.9831 48.3905 23.3251 48.3905 24.7672 46.8286C26.2093 45.2667 26.2093 42.7302 24.7672 41.1683L8.91527 24L24.7557 6.83171C26.1978 5.26982 26.1978 2.73331 24.7557 1.17142C23.3135 -0.390472 20.9715 -0.390472 19.5294 1.17142L1.07006 21.1636L1.0816 21.1761ZM41.6921 1.18391L23.2328 21.1761C21.7906 22.738 21.7906 25.2745 23.2328 26.8364L41.6921 46.8286C43.1342 48.3905 45.4763 48.3905 46.9184 46.8286C48.3605 45.2667 48.3605 42.7302 46.9184 41.1683L31.0665 24L46.9069 6.83171C48.349 5.26982 48.349 2.73331 46.9069 1.17142C45.4647 -0.390472 43.1227 -0.390472 41.6806 1.17142L41.6921 1.18391Z"
                  fill="#10B981"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 lg:size-6 flex-shrink-0"
                onClick={toggleSidebar}
              >
                <path
                  d="M44.118 26.1189C45.2898 24.9471 45.2898 23.0439 44.118 21.8721L29.118 6.87207C27.9461 5.7002 26.043 5.7002 24.8711 6.87207C23.6992 8.04395 23.6992 9.94707 24.8711 11.1189L37.7523 24.0002L24.8805 36.8814C23.7086 38.0533 23.7086 39.9564 24.8805 41.1283C26.0523 42.3002 27.9555 42.3002 29.1273 41.1283L44.1273 26.1283L44.118 26.1189ZM11.118 41.1189L26.118 26.1189C27.2898 24.9471 27.2898 23.0439 26.118 21.8721L11.118 6.87207C9.94609 5.7002 8.04297 5.7002 6.87109 6.87207C5.69922 8.04395 5.69922 9.94707 6.87109 11.1189L19.7523 24.0002L6.88047 36.8814C5.70859 38.0533 5.70859 39.9564 6.88047 41.1283C8.05234 42.3002 9.95547 42.3002 11.1273 41.1283L11.118 41.1189Z"
                  fill="#10B981"
                />
              </svg>
            )}

            {/* <NavbarProfile /> */}
          </div>
          <Outlet open={open} />
        </div>
      </div>
    </SidebarProvider>
  );
}
