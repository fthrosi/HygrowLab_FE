import { Outlet } from 'react-router-dom';
import React from 'react';
export default function LayoutDashboard() {
  return (
    <>
      <div className="w-full h-[100vh] flex relative">
        <aside className="w-[20%] h-[100vh]  ">
          <div className="w-full h-[80px] p-3 mt-7 ">
            <div className="h-full w-full flex items-center gap-4">
              <img className="w-[60px] h-full " src="image/Logo.png" alt="" />
              <h1 className="nunito font-bold text-[25px]">HygrowLab</h1>
            </div>
          </div>
          <div className="w-full mt-5 ">
            <div className="flex w-full gap-4 items-center h-[50px] relative hover:cursor-pointer ">
              <div className=" absolute left-0">
                <img className="h-full" src="image/gap.png" alt="" />
              </div>
              <div className="flex gap-4  absolute left-[25px] ">
                <img
                  className="w-[25px] h-[25px]"
                  src="image/Home.png"
                  alt=""
                />
                <p className="text-[rgb(16,185,129)] text-[21px] nunito font-bold ">
                  Dashboard
                </p>
              </div>
            </div>
            <div className="flex w-full gap-4 items-center h-[50px] relative hover:cursor-pointer  ">
              {/* <div className=" absolute left-0">
                <img className="h-full" src="image/gap.png" alt="" />
              </div> */}
              <div className="flex gap-4  absolute left-[25px] ">
                <img
                  className="w-[25px] h-[25px]"
                  src="image/tanaman.png"
                  alt=""
                />
                <p className="text-[rgb(124,124,124)] hover:text-[rgb(16,185,129)] text-[21px] nunito font-bold ">
                  Tanaman Saya
                </p>
              </div>
            </div>
            <div className="flex w-full gap-4 items-center h-[50px] relative hover:cursor-pointer ">
              {/* <div className=" absolute left-0">
                <img className="h-full" src="image/gap.png" alt="" />
              </div> */}
              <div className="flex gap-4  absolute left-[25px] ">
                <img
                  className="w-[25px] h-[25px] hover:text-[rgb(16,185,129)]"
                  src="image/kalkulator.png"
                  alt=""
                />
                <p className="text-[rgb(124,124,124)] hover:text-[rgb(16,185,129)] text-[21px] nunito font-bold ">
                  Kalkulasi Nutrisi
                </p>
              </div>
            </div>
          </div>
        </aside>
        <div className="w-[83%] bg-gray-100">
          <div className="w-[95%] h-[70px] bg-white mx-auto mt-7 flex items-center relative  ">
            <img
              className="h-[60px] w-[60px] right-[30px] absolute"
              src="image/joko.png"
              alt=""
            />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
