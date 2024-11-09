import React from "react";
import { Link,useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../utils/navbar.css"
export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  }
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
      <nav className={`flex px-[18.75rem] py-4 justify-between content-center items-center ${scroll?"shadow-md bg-white":""}`}>
        <a href="/beranda" className="flex items-center gap-4">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            style={{ width: 53, height: 53 }}
          />
          <h1 className="font-nunito font-bold text-2xl">HygrowLab</h1>
        </a>
        <ul className={`navlink flex gap-8 text-xl font-nunito`}>
          <li>
            <Link to="/beranda" className={`${isActive("/beranda") ? "text-primary":"text-[#838E9E]"}`}>Beranda</Link>
          </li>
          <li>
            <Link to="/tentangkami" className={`${isActive("/tentangkami") ? "text-primary":"text-[#838E9E]"}`}>Tentang Kami</Link>
          </li>
          <li>
            <Link to="/faqs" className={`${isActive("/faqs") ? "text-primary":"text-[#838E9E]"}`}>FAQs</Link>
          </li>
        </ul>
        <div className="button px-[2rem] py-[0.5rem] bg-primary text-white rounded-[0.438rem]">
          <a href="/tentangkami" className="font-bold">Masuk</a>
        </div>
      </nav>
    </div>
  );
}
