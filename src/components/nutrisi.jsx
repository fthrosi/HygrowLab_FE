import { useState } from "react";
export default function Nutrisi() {
  const [show, setShow] = useState(false);
  const muncul = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row py-9 gap-10">
        <div className="xl:w-[50%] xl:h-[30vw] bg-white xl:py-[2.906rem] xl:px-[3.313rem] p-[0.813rem] flex flex-col gap-[2.375rem] rounded-md">
          <form className="nunito flex flex-col" action="">
            <label className="font-bold mt-2 text-[0.75rem]">Nama Tanaman</label>
            <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
              <div className="px-4  flex items-center rounded-md">
                <select
                  className="w-full px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent bg-off-white text-[0.625rem] xl:text-[1rem]"
                  name="namatanaman"
                  id="namatanaman"
                  placeholder="--Pilih Tanaman--"
                >
                  <option value="">--Pilih Tanaman--</option>
                  <option value="1">Tomat</option>
                  <option value="2">Selada</option>
                  <option value="3">Kangkung</option>
                  <option value="4">Bayam</option>
                </select>
              </div>
            </div>
            <label className="font-bold mt-5 text-[0.75rem]">Volume Air Kolam (Liter)</label>
            <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
              <div className="px-4 flex items-center ">
                <input
                  className="px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent w-full bg-off-white text-[0.625rem] xl:text-[1rem]"
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Litter"
                />
              </div>
            </div>
            <label className="font-bold mt-5 text-[0.75rem]">Usia Tanaman</label>
            <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
              <div className="px-4 flex items-center">
                <input
                  className="px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent w-full bg-off-white text-[0.625rem] xl:text-[1rem]"
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Minggu Ke-"
                />
              </div>
            </div>
            <div className="w-full flex justify-end mt-5">
              <button
                className="w-1/3 bg-primary text-white py-2.5 mt-3 rounded-lg hover:cursor-pointerfont-semibold text-[0.625rem] xl:text-[1rem]"
                type="submit"
                onClick={muncul}
              >
                Hitung Nutrisi
              </button>
            </div>
          </form>
        </div>
        <div className="xl:w-[50%] xl:h-[30vw] bg-white flex rounded-md py-[2.25rem] px-[1.25rem]">
          <div className="w-50% flex items-center order-2 xl:order-1">
            <img
            src="/assets/images/asset5.png"
            alt="asset"
            className="xl:size-96 xl:mt-10 size-40"
          />
          </div>
          
          <div className="flex flex-col w-50% order-1 xl:order-2">
            <h1 className="font-bold text-primary xl:text-[2rem] xl:pt-20 xl:px-1 text-[1.5rem]">
              Hasil Kalkulasi
            </h1>
            <h1 className="xl:mt-10 mt-2 font-semibold text-[1rem]">Nutrisi A : 0 ML</h1>
            <h1 className="mt-2 font-semibold text-[1rem]">Nutrisi B : 0 ML</h1>
            <div className={`${show ? "" : "hidden"}`}>
              <button className="bg-primary rounded-md py-2 font-semibold text-white xl:mt-8 mt-6 px-3">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}