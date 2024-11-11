import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
export default function Tanaman() {
  const [show, setShow] = useState(false);
  const muncul = () => {
    setShow(true);
  };
  const Open = () => {
    return (
      <>
        <div className="w-full h-full flex justify-center items-center   fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]">
          <div className="w-[550px] h-[370px] bg-white rounded-md">
            <div className="px-8 py-8">
              <h1 className="nunito text-[25px] font-bold text-center mb-6">
                Form Input Tanaman
              </h1>
              <form action="" className="w-full">
                <label htmlFor="" className="nunito font-bold text-[18px]">
                  Jenis Tanaman
                </label>
                <div className="w-full border nunito mt-2 mb-3 ">
                  <select className="w-full px-4 py-3" name="" id="">
                    <option value="">--Pilih Tanaman--</option>
                    <option value="">Kangkung</option>
                    <option value="">Sawi</option>
                    <option value="">Kamu</option>
                  </select>
                </div>
                <label htmlFor="" className="nunito font-bold text-[18px] ">
                  Nama Tanaman
                </label>
                <div className="w-full border nunito mt-2 ">
                  <input
                    className="w-full px-4 py-3"
                    type="text"
                    placeholder="Masukkan nama tanaman"
                  />
                </div>
                <div className="w-full flex justify-end">
                  <button
                    className="bg-[rgb(16,185,129)] py-3 px-14 rounded-xl mt-5 nunito text-white  "
                    type="submit">
                    Simpan
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
     navigate("/detailtanaman");
   };
  return (
    <>
      {show && <Open />}
      <div className="w-full">
        <div className="w-[95%] flex  justify-between mt-9 mx-auto">
          <p className="nunito font-bold text-[22px] ">Tanaman Saya</p>
          <div
            onClick={muncul}
            href=""
            className="border bg-[rgb(16,185,129)] rounded-xl nunito text-white py-3 px-6 hover:cursor-pointer">
            + Tambah Tanaman
          </div>
        </div>
        <div className="w-[95%] mx-auto ">
          <div className="w-[240px] h-[260px] shadow-2xl rounded-md">
            <div className="w-full h-[60%]" onClick={hanleClick}>
              <div className='w-full h-full bg-cover p-1' style={{ backgroundImage: `url("/assets/images/foto.png")` }}>
                  <div className='flex justify-end'>
                      <div className='w-[26px] h-[26px] rounded-full bg-off-white flex justify-center items-center'>
                          <img src="assets/icons/Group.png" alt="icon" />
                      </div>
                  </div>
              </div>
              <div className='px-3 mt-6'>
                <h1 className='text-primary text-[18px]'>
                  Pakcoy
                </h1>
              </div>
              <div className='flex justify-between px-3 mt-1'>
                  <h1 className='font-bold text-[18px]'>
                    Pakcoy Kolam 4
                  </h1>
                  <img src="/assets/icons/share.png" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
