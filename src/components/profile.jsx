import { useState, useEffect } from 'react';

export default function Profile() {
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
            <div className="xl:px-8 xl:py-8 px-5 py-5 ">
              <h1 className="nunito xl:text-[25px] md:text-[20px] font-bold text-center mb-6">
                Silahkan Ganti Password Anda
              </h1>
              <form action="" className="w-full">
                <label
                  htmlFor=""
                  className="nunito font-bold text-[13px] md:text-[16px] xl:text-[18px]">
                  Password Lama
                </label>
                <div className="w-full border nunito mt-2 ">
                  <input
                    className="w-full md:px-4 md:py-3 px-2 py-2 text-[13px]  md:text-[15px]"
                    type="password"
                    placeholder="Masukkan Password Lama"
                  />
                </div>
                <label
                  htmlFor=""
                  className="nunito font-bold text-[13px] md:text-[16px] xl:text-[18px] ">
                  Password Baru
                </label>
                <div className="w-full border nunito mt-2 ">
                  <input
                    className="w-full md:px-4 md:py-3 px-2 py-2 text-[13px]  md:text-[15px]"
                    type="password"
                    placeholder="Masukkan Password Baru"
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

  // Tampilkan loading atau error jika ada
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {show && <Open />}
      <div className="w-full   py-9 flex flex-col gap-3 ">
        <h1 className="nunito text-[20px] sm:text-[24px] md:text-[26px] font-bold">
          Profil
        </h1>
        <div className="w-full flex sm:items-center  flex-col lg:flex-row lg:justify-between mt-4 ">
          <div className="w-full sm:max-w-[620px] xl:max-w-[700px]     lg:w-[39%]  bg-white lg:order-2  flex flex-col  rounded-lg items-center">
            <div className="py-8 lg:py-14">
              <div className="w-[200px] h-[200px] lg:w-[270px] lg:h-[270px] rounded-full   ">
                <img
                  className="w-full h-full rounded-full "
                  src="assets/images/orang.png"
                  alt=""
                />
              </div>
              <div className="w-full flex flex-col items-center lg:flex-row gap-5 mt-7">
                <div
                  onClick={muncul}
                  className=" font-normal button text-center py-2 px-5 nunito text-[13px]  bg-primary text-white rounded-[0.438rem]    hover:cursor-pointer">
                  Ubah Password
                </div>
                <div className=" font-normal button nunito  text-center py-2 px-5 bg-primary text-[13px] text-white rounded-[0.438rem]    hover:cursor-pointer">
                  Ganti foto profil
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-6 lg:mt-0  bg-white sm:max-w-[620px] lg:max-w-[700px] 2xl:max-w-[800px] rounded-lg  lg:w-[59%]  lg:order-1 flex items-center ">
            <div className="p-5 py-8">
              <form className="" action="">
                <label htmlFor="" className="nunito font-bold">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value="joan carolus amola purba"
                  className="w-full nunito  mt-1 py-2 px-2.5 mb-4 bg-gray-50"
                />
                <label htmlFor="" className="nunito font-bold ">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  placeholder="DD-MM-YYYY"
                  className="w-full  mt-1 nunito py-2 px-2.5 mb-4 bg-gray-50"
                />
                <label htmlFor="" className="nunito font-bold ">
                  Kota Domisili
                </label>
                <input
                  type="text"
                  value="Batam"
                  className="w-full nunito mt-1 py-2 px-2.5 mb-4 bg-gray-50"
                />
                <label htmlFor="" className="nunito font-bold ">
                  Email
                </label>
                <input
                  type="email"
                  value="joanpurba@gmail.com"
                  className="w-full  mt-1 py-2 px-2.5 bg-gray-50"
                />
              </form>
              <div className="w-full flex justify-end">
                <input
                  className=" font-normal button text-center py-1.5 px-10 nunito text-[14px]  bg-primary text-white rounded-[0.438rem] mt-7    hover:cursor-pointer"
                  type="submit"
                  value="Simpan"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
