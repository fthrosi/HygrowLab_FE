import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div className="max-w-[365px] w-full min-h-screen gap-4 shrink-0 flex flex-col pt-10 px-10">
      {/* Logo dan Title */}
      <div className="flex gap-5 items-center justify-start">
        <img className="size-[3.313rem]" src="/assets/images/logo.png" alt="" />
        <h1 className="nunito font-bold text-[25px]">HygrowLab</h1>
      </div>

      {/* Dashboard Menu */}
      <div className="flex w-full gap-5 items-center hover:cursor-pointer justify-start mt-[2.5rem] ">
        <img
          className="w-[20px] h-[20px]"
          src="assets/images/Home.png"
          alt=""
        />
        <Link
          to="/home"
          className={`text-[rgb(124,124,124)] hover:text-[rgb(16,185,129)] text-[21px] nunito font-bold ${
            isActive('/home') ? 'text-primary' : ''
          }`}>
          Dashboard
        </Link>
      </div>

      {/* Tanaman Saya Menu */}
      <div className="flex w-full gap-5 justify-start items-center hover:cursor-pointer">
        <img
          className="w-[20px] h-[20px]"
          src="assets/images/leaf.png"
          alt=""
        />
        <Link
          to="/tanaman"
          className={`text-[rgb(124,124,124)] hover:text-[rgb(16,185,129)] text-[21px] nunito font-bold ${
            isActive('/tanaman') ? 'text-primary' : ''
          }`}>
          Tanaman Saya
        </Link>
      </div>

      {/* Kalkulasi Nutrisi Menu */}
      <div className="flex w-full gap-5 items-center relative hover:cursor-pointer">
        <img
          className="w-[20px] h-[20px]"
          src="assets/images/kalkulator.png"
          alt=""
        />
        <Link
          to="/nutrisi"
          className={`text-[rgb(124,124,124)] hover:text-[rgb(16,185,129)] text-[21px] nunito font-bold ${
            isActive('/nutrisi') ? 'text-primary' : ''
          }`}>
          Kalkulasi Nutrisi
        </Link>
      </div>
    </div>
  );
}
