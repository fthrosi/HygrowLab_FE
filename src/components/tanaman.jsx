import { useState } from 'react';
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
                    onClick={tutup}
                    className=" bg-red-500 py-3 px-14 rounded-xl mt-5 nunito text-white  ">
                    Cancel
                  </button>
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
          <div className="w-[240px] h-[260px] shadow-2xl">
            <div className="w-full h-[60%] flex ">
              <img
                className="w-[95%] h-full"
                src="assets/images/image 5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
