import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ open, toggleSidebar }) {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div
      className={`min-h-screen gap-4 shrink-0 pt-9 transition-all duration-300 ease-in-out ${
        open ? "xl:px-5 xl:w-[270px] px-5 w-full" : "xl:w-[60px] xl:px-2 w-0"
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center justify-start">
            <img className="xl:size-10 size-8" src="/assets/images/logo.png" alt="" />
            <h1
              className={`nunito font-bold text-[1.563rem] ${open ? "" : "hidden"}`}
            >
              HygrowLab
            </h1>
          </div>
          <img
            src="/assets/icons/burger.png"
            alt=""
            className="xl:size-7 size-[1.5rem] md:hidden"
            onClick={toggleSidebar}
          />
        </div>

        <ul className="mt-10 flex flex-col gap-4 px-2">
          <li>
            <Link
              to="/home"
              className={`text-[rgb(124,124,124)] hover:text-primary xl:text-[1.313rem] text-[1rem] nunito font-bold flex gap-4 hover:cursor-pointer ${
                isActive("/home") ? "text-primary" : ""
              }`}
            >
              <img className="xl:size-7 size-5" src="assets/images/Home.png" alt="" />
              <h1 className={`${open ? "" : "hidden"}`}>Dashboard </h1>
            </Link>
          </li>
          <li>
            <Link
              to="/tanaman"
              className={`text-[rgb(124,124,124)] hover:text-primary xl:text-[1.313rem] text-[1rem] nunito font-bold flex gap-4 hover:cursor-pointer ${
                isActive("/tanaman") ? "text-primary" : ""
              }`}
            >
              <img className="xl:size-7 size-5" src="assets/images/leaf.png" alt="" />
              <h1 className={`${open ? "" : "hidden"}`}>Tanaman Saya</h1>
            </Link>
          </li>
          <li>
            <Link
              to="/nutrisi"
              className={`text-[rgb(124,124,124)] hover:text-primary xl:text-[1.313rem] text-[1rem] nunito font-bold flex gap-4 hover:cursor-pointer ${
                isActive("/nutrisi") ? "text-primary" : ""
              }`}
            >
              <img
                className="xl:size-7 size-5"
                src="assets/images/kalkulator.png"
                alt=""
              />
              <h1 className={`${open ? "" : "hidden"}`}>Kalkulasi Nutrisi</h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
