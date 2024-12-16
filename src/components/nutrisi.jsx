import { useState, useEffect } from "react";
import { GetTanaman } from "../api/tanaman";
import { Kalkulasi } from "../api/pencatatan";
import { tambahCatatan } from "../api/pencatatan";
import { useSidebar } from "../context/sidebarContext";
import { toast } from "sonner";
export default function Nutrisi() {
  const { open } = useSidebar();
  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);
  const [nutrisi, setNutrisi] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    volume: "",
    usia: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleKalkulasi = async (e) => {
    e.preventDefault();
    try {
      const calc = await Kalkulasi(formData);
      setNutrisi(calc);
      setShow(true);
      toast.success("Berhasil Melakukan Kalkulasi")
    } catch (error) {
      setShow(false);
      setNutrisi({ Nut_A: "0", Nut_B: "0" });
      toast.error("Gagal Melakukan Kalkulasi")
    }
  };
  const handleAdd = async () => {
    const dataToSave = {
      tanaman_id: formData.nama,
      volume: formData.volume,
      age: formData.usia,
      nut_a: nutrisi.Nut_A,
      nut_b: nutrisi.Nut_B,
    };
    try {
      const add = await tambahCatatan(dataToSave);
      toast.success("Berhasil Menyimpan Catatan Nutrisi");
      setFormData({
        nama: "",
        volume: "",
        usia: "",
      });
      setNutrisi({ Nut_A: "0", Nut_B: "0" });
      setShow(!show);
    } catch (error) {
      toast.error("Gagal Menyimpan Catatan Nutrisi");
    }
  };
  const fetchList = async () => {
    try {
      const data = await GetTanaman();
      setList(data.data);
    } catch (error) {
      console.error("Gagal menampilkan data tanaman", error);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      <h1 className="px-2 md:px-5 mt-3 md:mt-5 xl:mt-7 font-nunito font-bold text-[clamp(1rem,5vw,1.5rem)] lg:text-[clamp(1.5rem,2.3vw,2rem)] xl:text-[clamp(2rem,2.5vw,3rem)]">
        Kalkulasi Nutrisi
      </h1>
      <div className="flex flex-col xl:flex-row md:py-5 py-3 xl:py-10 gap-10 mx-2 md:mx-5">
        <div className="xl:w-[50%] bg-white xl:py-[2.906rem] xl:px-[3.313rem] p-[0.813rem] flex flex-col gap-[2.375rem] rounded-md">
          <form className="nunito flex flex-col" onSubmit={handleKalkulasi}>
            <label className="font-bold mt-2 text-[clamp(0.75rem,5vw,1rem)] lg:text-[clamp(1rem,1.56vw,1.5rem)]">
              Nama Tanaman
            </label>
            <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
              <div className="px-4  flex items-center rounded-md">
                <select
                  className="w-full px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent bg-off-white text-[clamp(0.625rem,3.125vw,0.8rem)] lg:text-[clamp(0.8rem,1.25vw,1rem)] xl:text-[1rem]"
                  name="nama"
                  id="namatanaman"
                  onChange={handleChange}
                  value={formData.nama}
                >
                  <option value="">--Pilih Tanaman--</option>
                  {list.map((item) => (
                    <option key={item.plant_id} value={item.plant_id}>
                      {item.plant_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <label className="font-bold mt-5 text-[clamp(0.75rem,5vw,1rem)] lg:text-[clamp(1rem,1.56vw,1.5rem)]">
              Volume Air Kolam (Liter)
            </label>
            <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
              <div className="px-4 flex items-center ">
                <input
                  className="px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent w-full bg-off-white placeholder:text-[clamp(0.625rem,3.125vw,0.8rem)] lg:placeholder:text-[clamp(0.8rem,1.25vw,1rem)] xl:text-[1rem]"
                  type="number"
                  name="volume"
                  id="number"
                  placeholder="Litter"
                  onChange={handleChange}
                  value={formData.volume}
                />
              </div>
            </div>
            <label className="font-bold mt-5 text-[clamp(0.75rem,5vw,1rem)] lg:text-[clamp(1rem,1.56vw,1.5rem)]">
              Usia Tanaman
            </label>
            <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
              <div className="px-4 flex items-center">
                <input
                  className="px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent w-full bg-off-white placeholder:text-[clamp(0.625rem,3.125vw,0.8rem)] lg:placeholder:text-[clamp(0.8rem,1.25vw,1rem)] xl:text-[1rem]"
                  type="number"
                  name="usia"
                  id="number"
                  placeholder="Minggu Ke-"
                  onChange={handleChange}
                  value={formData.usia}
                />
              </div>
            </div>
            <div className="w-full flex justify-end mt-5">
              <button
                className="bg-primary text-white py-2.5 px-2 mt-3 rounded-lg hover:cursor-pointerfont-semibold text-[clamp(0.625rem,3.125vw,0.8rem)] xl:text-[1rem] lg:text-[clamp(0.8rem,1.25vw,1rem)]"
                type="submit"
              >
                Hitung Nutrisi
              </button>
            </div>
          </form>
        </div>
        <div className="xl:w-[50%] xl:flex 2xl:justify-center items-center bg-white rounded-md py-[2.25rem] px-[1.25rem]">
          <div className="flex justify-self-center w-4/5 xl:w-full 2xl:w-3/4">
            <div className="w-[50%] md:w-[60%] lg:w-[60%] flex items-center order-2 md:order-1 flex-shrink-0">
              <img
                src="/assets/images/asset5.png"
                alt="asset"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col w-[50%] order-1 md:order-2 justify-center md:w-[40%] ">
              <h1
                className={`font-bold text-primary text-[clamp(1rem,5vw,2rem)] md:text-[clamp(1.8rem,3.75vw,2.5rem)] lg:text-[clamp(2rem,3.5vw,4rem)] ${
                  open
                    ? "xl:text-[clamp(1.5rem,2.25vw,1.9rem)] 2xl:text-[clamp(1.4rem,1.5vw,2.1rem)]"
                    : "xl:text-[clamp(1.8rem,2.25vw,2.4rem)] 2xl:text-[clamp(1.8rem,1.9vw,2.5rem)]"
                }`}
              >
                Hasil Kalkulasi
              </h1>
              <h1
                className={` mt-2 text-[clamp(0.8rem,4vw,1.8rem)] md:text-[clamp(1.5rem,3.12vw,1.9rem)] lg:text-[clamp(1.8rem,2.8vw,2.5rem)] ${
                  open
                    ? "xl:text-[clamp(1.3rem,1.625vw,1.6rem)] 2xl:text-[clamp(1.2rem,1.25vw,1.8rem)] xl:mt-5"
                    : "xl:text-[clamp(1.5rem,1.9vw,2rem)] 2xl:text-[clamp(1.5rem,1.6vw,2rem)] xl:mt-7"
                }`}
              >
                Nutrisi A :{" "}
                <span className="font-semibold">{nutrisi.Nut_A ?? 0}</span> ML
              </h1>
              <h1
                className={`mt-2 text-[clamp(0.8rem,4vw,1.8rem)] md:text-[clamp(1.5rem,3.12vw,1.9rem)] lg:text-[clamp(1.8rem,2.8vw,2.5rem)] ${
                  open
                    ? "xl:text-[clamp(1.3rem,1.625vw,1.6rem)] 2xl:text-[clamp(1.2rem,1.25vw,1.8rem)]"
                    : "xl:text-[clamp(1.5rem,1.9vw,2rem)] 2xl:text-[clamp(1.5rem,1.6vw,2rem)]"
                }`}
              >
                Nutrisi B :{" "}
                <span className="font-semibold">{nutrisi.Nut_B ?? 0}</span> ML
              </h1>
              <div className={`${show ? "" : "hidden"}`}>
                <button className="bg-primary rounded-md py-2 font-semibold text-white xl:mt-8 mt-6 px-3" onClick={handleAdd}>
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
