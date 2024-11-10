import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../utils/navbar.css";
import "../utils/hamburger.css";
export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="fixed w-full">
      <nav
        className={`md:flex xl:px-[18.75rem] md:px-10 md:py-4 justify-between content-center items-center ${
          scroll ? "md:shadow-md md:bg-white" : ""
        }`}
      >
        <div className={`flex justify-between w-full md:w-auto px-[2rem] md:px-0 md:py-0 py-4 ${
          scroll ? "shadow-md bg-white md:shadow-none md:bg-transparent" : ""
        }`}>
          <a href="/beranda" className="flex items-center md:gap-4 gap-2">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="md:size-[6.9vw] size-[10vw] xl:size-[3.313rem]"
            />
            <h1 className="font-nunito font-bold md:text-[3.125vw] text-[5.6vw] xl:text-[1.563rem]">
              HygrowLab
            </h1>
          </a>
          <button
            className={`md:!hidden translate-y-0 hamburger hamburger--elastic ${
              open ? "is-active" : ""
            }`}
            onClick={() => setOpen(!open)}
          >
            <span className="hamburger-box md:hidden">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div
          className={`flex justify-center py-10 md:py-0 z-49 ${
            open
              ? "bg-white bg-opacity-45 translate-x-0 transition-all duration-500 backdrop-blur-sm"
              : "-translate-x-[100rem] transition-all duration-500"
          } md:translate-x-0`}
        >
          <ul
            className={`navlink flex flex-col md:flex-row items-center md:gap-8 text-xl md:text-[2.6vw] xl:text-[1.25rem] font-nunito`}
          >
            <li>
              <Link
                to="/beranda"
                className={`${
                  isActive("/beranda") ? "text-primary" : "text-[#838E9E]"
                }`}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/tentangkami"
                className={`${
                  isActive("/tentangkami") ? "text-primary" : "text-[#838E9E]"
                }`}
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className={`${
                  isActive("/faqs") ? "text-primary" : "text-[#838E9E]"
                }`}
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="button px-[2rem] py-[0.5rem] bg-primary text-white rounded-[0.438rem] hidden lg:block">
          <a href="/tentangkami" className="font-bold">
            Masuk
          </a>
        </div>
      </nav>
    </div>
  );
}
