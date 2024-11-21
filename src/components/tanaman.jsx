import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
export default function Tanaman() {
  const [show, setShow] = useState(false);
  const muncul = () => {
    setShow(true);
  };
  const tutup = () => {
    setShow(false);
  };
  const Open = () => {
    return (
      <>
        <div className="w-full h-full  flex justify-center items-center   fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]">
          <div className="xl:w-[550px] xl:h-[370px] w-[93%] max-w-[450px] md:max-w-[500px]  bg-white rounded-md">
            <div className="xl:px-8 xl:py-8 px-3 py-3 lg:px-5 lg:py-5">
              <h1 className="nunito xl:text-[25px] md:text-[20px] font-bold text-center mb-6">
                Form Input Tanaman
              </h1>
              <form action="" className="w-full">
                <label
                  htmlFor=""
                  className="nunito font-bold text-[13px] md:text-[16px] xl:text-[18px]">
                  Jenis Tanaman
                </label>
                <div className="w-full border nunito mt-2 mb-3 ">
                  <select
                    className="w-full text-[13px] md:text-[15px] md:px-4 md:py-3 px-2 py-2"
                    name=""
                    id="">
                    <option value="">--Pilih Tanaman--</option>
                    <option value="">Kangkung</option>
                    <option value="">Sawi</option>
                    <option value="">Kamu</option>
                  </select>
                </div>
                <label
                  htmlFor=""
                  className="nunito font-bold text-[13px] md:text-[16px] xl:text-[18px] ">
                  Nama Tanaman
                </label>
                <div className="w-full border nunito mt-2 ">
                  <input
                    className="w-full md:px-4 md:py-3 px-2 py-2 text-[13px]  md:text-[15px]"
                    type="text"
                    placeholder="Masukkan nama tanaman"
                  />
                </div>
                <div className="w-full flex justify-end gap-3">
                  <button
                    className="bg-[rgb(16,185,129)] 2xl:py-3 2xl:px-14 xl:py-3 xl:px-9 px-5 py-2 md:px-7  text-[14px] rounded-xl mt-5 nunito text-white  "
                    type="submit">
                    Simpan
                  </button>
                  <button
                    onClick={tutup}
                    className=" bg-red-500 2xl:py-3 2xl:px-14 xl:py-3 xl:px-9  px-5 py-2 md:px-7  text-[14px] rounded-xl mt-5 nunito text-white  ">
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };
  const navigate = useNavigate();
  const hanleClick = () => {
    navigate('/detailtanaman');
  };
  return (
    <>
      {show && <Open />}
      <div className="w-full h-full  rounded-md mt-9 ">
        <div className="flex w-full justify-between">
          <h1 className="nunito text-[20px] lg:text-[25px]  font-extrabold">
            Tanaman Saya
          </h1>
          <div
            onClick={muncul}
            href=""
            className="border bg-[rgb(16,185,129)] rounded-lg nunito px-3 py-1 lg:px-6 lg:py-3 text-white text-[12px] lg:text-[14px]  hover:cursor-pointer">
            + Tambah Tanaman
          </div>
        </div>
        <div className="mx-auto mt-6 flex flex-wrap gap-4  ">
          <div className="xl:w-[240px] hover:cursor-pointer xl:h-[260px] w-[46%]  h-[180px] sm:w-[30%] md:w-[170px] md:h-[200px] shadow-2xl rounded-md">
            <div className="w-full h-[60%] " onClick={hanleClick}>
              <div
                className="w-full h-full bg-cover p-1"
                style={{ backgroundImage: `url("/assets/images/foto.png")` }}>
                <div className="flex justify-end">
                  <div className="w-[26px] h-[26px] rounded-full bg-off-white flex justify-center items-center">
                    <img src="assets/icons/Group.png" alt="icon" />
                  </div>
                </div>
              </div>
              <div className="px-3 mt-2">
                <h1 className="text-primary text-[14px] md:text-[16px]  xl:text-[20px]">
                  Pakcoy
                </h1>
              </div>
              <div className="flex justify-between px-3 mt-1">
                <h1 className="font-bold text-[12px] md:text-[16px] xl:text-[20px]">
                  Pakcoy Kolam 4
                </h1>
                <img
                  className=" size-5 md:size-6 xl:size-8 "
                  src="/assets/icons/share.png"
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-[240px] hover:cursor-pointer xl:h-[260px] w-[46%] h-[180px] sm:w-[30%] md:w-[170px] md:h-[200px] shadow-2xl rounded-md">
            <div className="w-full h-[60%]" onClick={hanleClick}>
              <div
                className="w-full h-full bg-cover p-1"
                style={{ backgroundImage: `url("/assets/images/foto.png")` }}>
                <div className="flex justify-end">
                  <div className="w-[26px] h-[26px] rounded-full bg-off-white flex justify-center items-center">
                    <img src="assets/icons/Group.png" alt="icon" />
                  </div>
                </div>
              </div>
              <div className="px-3 mt-2">
                <h1 className="text-primary text-[14px] md:text-[16px]  xl:text-[20px]">
                  Pakcoy
                </h1>
              </div>
              <div className="flex justify-between px-3 mt-1">
                <h1 className="font-bold text-[12px] md:text-[16px] xl:text-[20px]">
                  Pakcoy Kolam 4
                </h1>
                <img
                  className=" size-5 md:size-6 xl:size-8 "
                  src="/assets/icons/share.png"
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-[240px] hover:cursor-pointer xl:h-[260px] w-[46%] h-[180px] sm:w-[30%] md:w-[170px] md:h-[200px] shadow-2xl rounded-md">
            <div className="w-full h-[60%]" onClick={hanleClick}>
              <div
                className="w-full h-full bg-cover p-1"
                style={{ backgroundImage: `url("/assets/images/foto.png")` }}>
                <div className="flex justify-end">
                  <div className="w-[26px] h-[26px] rounded-full bg-off-white flex justify-center items-center">
                    <img src="assets/icons/Group.png" alt="icon" />
                  </div>
                </div>
              </div>
              <div className="px-3 mt-2">
                <h1 className="text-primary text-[14px] md:text-[16px]  xl:text-[20px]">
                  Pakcoy
                </h1>
              </div>
              <div className="flex justify-between px-3 mt-1">
                <h1 className="font-bold text-[12px] md:text-[16px] xl:text-[20px]">
                  Pakcoy Kolam 4
                </h1>
                <img
                  className=" size-5 md:size-6 xl:size-8 "
                  src="/assets/icons/share.png"
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-[240px] hover:cursor-pointer xl:h-[260px] w-[46%] h-[180px] sm:w-[30%] md:w-[170px] md:h-[200px] shadow-2xl rounded-md">
            <div className="w-full h-[60%]" onClick={hanleClick}>
              <div
                className="w-full h-full bg-cover p-1"
                style={{ backgroundImage: `url("/assets/images/foto.png")` }}>
                <div className="flex justify-end">
                  <div className="w-[26px] h-[26px] rounded-full bg-off-white flex justify-center items-center">
                    <img src="assets/icons/Group.png" alt="icon" />
                  </div>
                </div>
              </div>
              <div className="px-3 mt-2">
                <h1 className="text-primary text-[14px] md:text-[16px]  xl:text-[20px]">
                  Pakcoy
                </h1>
              </div>
              <div className="flex justify-between px-3 mt-1">
                <h1 className="font-bold text-[12px] md:text-[16px] xl:text-[20px]">
                  Pakcoy Kolam 4
                </h1>
                <img
                  className=" size-5 md:size-6 xl:size-8 "
                  src="/assets/icons/share.png"
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
