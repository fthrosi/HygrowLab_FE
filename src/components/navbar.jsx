import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [scroll, setScroll] = useState(false);
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
        <div className="flex items-center gap-4">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            style={{ width: 53, height: 53 }}
          />
          <h1 className="font-nunito font-bold text-2xl">HygrowLab</h1>
        </div>
        <ul className="flex gap-8 text-xl font-nunito text-[#838E9E]">
          <li>
            <Link>Beranda</Link>
          </li>
          <li>
            <Link>Tentang Kami</Link>
          </li>
          <li>
            <Link>FAQs</Link>
          </li>
        </ul>
        <div className="button px-[2rem] py-[0.5rem] bg-primary text-white rounded-[0.438rem]">
          <Link className="font-bold">Masuk</Link>
        </div>
      </nav>
    </div>
  );
}
