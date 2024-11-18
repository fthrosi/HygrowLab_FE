import { useState, useEffect } from "react";
export default function Tanaman() {
  const [tab, setTab] = useState(1);
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  const week = [
    {
      id: 1,
      tanggal: "12/12/2021",
      status: "Berlangsung",
      nama: "Kangkung",
      tinggi: "1",
      usia: "1",
      volume: "1000",
      vitA: "1000",
      vitB: "1000",
    },
    {
      id: 2,
      tanggal: "13/12/2021",
      status: "Panen",
      nama: "pakcoy",
      tinggi: "0.5",
      usia: "2",
      volume: "500",
      vitA: "500",
      vitB: "500",
    },
    {
      id: 3,
      tanggal: "14/12/2021",
      status: "Gagal",
      nama: "sawi",
      tinggi: "0.3",
      usia: "3",
      volume: "300",
      vitA: "300",
      vitB: "300",
    },
    {
      id: 4,
      tanggal: "15/12/2021",
      status: "Berlangsung",
      nama: "bayam",
      tinggi: "0.7",
      usia: "4",
      volume: "700",
      vitA: "700",
      vitB: "700",
    },
  ];
  useEffect(() => {
    const aktif = document.getElementById("myform");
    const ele = aktif.querySelectorAll("input");
      ele.forEach((input) => {
        input.disabled = !active; 
      });
  }, [active]); 

  return (
    <>
      <div className="py-9 w-full">
        <div className="bg-white rounded-md shadow-lg">
          <div className="flex justify-between bg-slate-400 rounded-t-md">
            {week.map((item) => (
              <div
                key={item.id}
                className={`flex  justify-center  w-[25%] py-2 hover:cursor-pointer transition-all duration-300 ease-in-out ${
                  tab === item.id ? "bg-white rounded-t-md" : ""
                }`}
                onClick={() => setTab(item.id)}
              >
                <h1 className="xl:text-xl text-[0.5rem]">Minggu Ke-{item.id}</h1>
              </div>
            ))}
          </div>
          <div className="flex md:flex-row flex-col xl:mt-10 mt-5 xl:gap-32 gap-16 pb-10 px-5 pt-5">
            <div className="flex flex-col xl:w-1/2">
              <div className="flex gap-10">
                <div className="flex flex-col gap-3">
                  <h1 className="font-bold text-[0.75rem] xl:text-[1rem]">Tanggal</h1>
                  <h1 className="text-[0.625rem] xl:text-[1rem]">{week.find((item) => item.id === tab)?.tanggal}</h1>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="font-bold text-[0.75rem] xl:text-[1rem]">Status</h1>
                  <div
                    className={`px-3 py-1 rounded-full font-nunito font-medium text-[0.625rem] xl:text-[1rem] ${
                      week.find((item) => item.id === tab)?.status === "Gagal"
                        ? "bg-red-600 text-white"
                        : week.find((item) => item.id === tab)?.status ===
                          "Panen"
                        ? "bg-green-600 text-white"
                        : "bg-yellow-200"
                    }`}
                  >
                    {week.find((item) => item.id === tab)?.status}
                  </div>
                </div>
              </div>
              <hr className="mt-5" />
              <form id="myform" className="flex flex-col" action="">
                <label className="font-bold mt-2 text-[0.75rem] xl:text-[1rem]">Nama Tanaman</label>
                <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
                  <div className="px-4  flex items-center rounded-md">
                    <input
                      className="w-full px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent bg-off-white text-[0.625rem] xl:text-[1rem]"
                      name="namatanaman"
                      id="namatanaman"
                      placeholder="Nama Tanaman"
                      value={week.find((item) => item.id === tab)?.nama}
                    ></input>
                  </div>
                </div>
                <label className="font-bold mt-2 text-[0.75rem] xl:text-[1rem]">Tinggi Tanaman</label>
                <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
                  <div className="px-4  flex items-center rounded-md">
                    <input
                      className="w-full px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent bg-off-white text-[0.625rem] xl:text-[1rem]"
                      name="namatanaman"
                      id="namatanaman"
                      placeholder="Nama Tanaman"
                      value={`${
                        week.find((item) => item.id === tab)?.tinggi
                      } Meter`}
                    ></input>
                  </div>
                </div>
                <label className="font-bold mt-2 text-[0.75rem] xl:text-[1rem]">Usia Tanaman</label>
                <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
                  <div className="px-4  flex items-center rounded-md">
                    <input
                      className="w-full px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent bg-off-white text-[0.625rem] xl:text-[1rem]"
                      name="namatanaman"
                      id="namatanaman"
                      placeholder="Nama Tanaman"
                      value={`${
                        week.find((item) => item.id === tab)?.usia
                      } minggu`}
                    ></input>
                  </div>
                </div>
                <label className="font-bold mt-5 text-[0.75rem] xl:text-[1rem]">
                  Volume Air Kolam (Liter)
                </label>
                <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
                  <div className="px-4 flex items-center ">
                    <input
                      className="px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent w-full bg-off-white text-[0.625rem] xl:text-[1rem]"
                      name="number"
                      id="number"
                      placeholder="Litter"
                      value={`${
                        week.find((item) => item.id === tab)?.volume
                      } ml`}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="flex flex-col xl:w-1/2">
              <div className="xl:w-[35rem] xl:h-[23rem]">
                <img
                  src="assets/images/foto.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="p-1 bg-white shadow-md rounded-md mt-2 text-[0.75rem] xl:text-[1rem]">
                <input
                  type="file"
                  className="w-full box-border" 
                />
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 bg-white rounded-md flex flex-col md:flex-row gap-8 px-5">
            <div>
              <h1 className="font-bold text-[0.75rem] xl:text-[1rem]">Hasil Kalkulasi</h1>
              <h1 className="font-semibold mt-4">
                <span className="text-[0.75rem] xl:text-[1rem]">Nutrisi A</span> : {week.find((item) => item.id === tab)?.vitA} ml
              </h1>
              <h1 className="font-semibold mt-2">
                <span className="text-[0.75rem] xl:text-[1rem]">Nutrisi B</span> : {week.find((item) => item.id === tab)?.vitB} ml
              </h1>
            </div>
            <div className="xl:w-[20rem]">
              <h1>Catatan</h1>
              <textarea className="w-full h-40 border-2 border-gray-200 mt-2 rounded-md bg-off-white" />
            </div>
          </div>
          <div className=" flex justify-end px-5 pb-5">
            <button className="bg-primary rounded-md py-2 font-semibold text-white mt-8 px-3" onClick={handleActive}>
              {active ? "Simpan" : "Edit Pencatatan"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
