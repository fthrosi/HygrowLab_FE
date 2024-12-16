import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetPencatatan, ubahFoto, editCatatan } from "../api/pencatatan";
import ModalEdit from "./modalEdit";
import { toast } from "sonner";
export default function Tanaman() {
  const { id } = useParams();
  const [tab, setTab] = useState(1);
  const [week, setWeek] = useState([]);
  const [show, setShow] = useState(false);
  const [editData, seteditData] = useState({
    tinggi_Tanaman: "",
    note: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    seteditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const tutup = () => {
    setShow(!show);
  };
  const handleEdit = async (editData) => {
    try {
      console.log("Editing data:", currentWeek.id, editData);
      await editCatatan(currentWeek.id, editData);
      fetchWeek();
      tutup();
      toast.success("Berhasil Edit Catatan");
    } catch (error) {
      toast.error("Gagal Edit Catatan");
    }
  };
  const handleFoto = async (idRecord, file) => {
    try {
      const formData = new FormData();
      formData.append("foto", file);
      formData.append("idRecord", idRecord);
      const respons = await ubahFoto(idRecord, formData);
      fetchWeek();
      toast.success("Berhasil Mengubah Foto");
      return respons;
    } catch (error) {
      toast.error("Gagal Ubah Foto");
    }
  };
  const fetchWeek = async () => {
    try {
      const response = await GetPencatatan(id);
      const data = response.data;
      setWeek(data);
    } catch (error) {
      console.error("Gagal menampilkan data tanaman", error);
    }
  };
  const currentWeek =
    week?.data && week.data.length > 0
      ? week.data.find((item) => item.usia === tab)
      : null;
  const handleActive = () => {
    if (currentWeek) {
      seteditData({
        tinggi_Tanaman: currentWeek.tinggi || "",
        note: currentWeek.note || "",
      });
      setShow(!show);
    } else {
      alert("silahkan hitung nutrisi minggu ini terkebih dahulu");
    }
  };
  useEffect(() => {
    fetchWeek();
  }, []);
  console.log(currentWeek);

  return (
    <>
      <div className="py-9 w-full px-2 md:px-5">
        {show && (
          <ModalEdit
            editData={editData}
            handleChange={handleChange}
            handleEdit={handleEdit}
            tutup={tutup}
          />
        )}
        <div className="bg-white rounded-md shadow-lg">
          <div className="flex justify-between bg-[#F6F6F6] rounded-t-md">
            {Array.from({ length: week?.harvest || 0 }).map((_, index) => (
              <div
                key={index}
                className={`flex justify-center w-[25%] py-2 hover:cursor-pointer transition-all duration-300 ease-in-out xl:text-xl ${
                  tab === index + 1
                    ? "bg-white rounded-t-md text-[0.75rem] font-semibold"
                    : "text-[0.5rem]"
                }`}
                onClick={() => setTab(index + 1)}
              >
                <h1>Minggu Ke-{index + 1}</h1>
              </div>
            ))}
          </div>
          <div className="flex md:flex-row flex-col xl:mt-10 mt-5 xl:gap-32 2xl:gap-52 gap-16 pb-10 px-5 pt-5">
            <div className="flex flex-col xl:w-3/5 md:w-1/2 order-2 md:order-1">
              <div className="flex gap-10">
                <div className="flex flex-col gap-3">
                  <h1 className="font-bold text-[clamp(0.75rem,3.75vw,1rem)] xl:text-[1rem]">
                    Tanggal
                  </h1>
                  <h1 className="text-[clamp(0.625rem,3.1vw,0.9rem)] xl:text-[1rem]">
                    {week?.tanggalTanam}
                  </h1>
                </div>
              </div>
              <hr className="mt-5" />
              <form id="myform" className="flex flex-col" action="">
                <label className="font-bold mt-2 text-[clamp(0.75rem,3.75vw,1rem)] xl:text-[1rem]">
                  Nama Tanaman
                </label>
                <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
                  <div className="px-4  flex items-center rounded-md">
                    <input
                      className="w-full px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent bg-off-white text-[clamp(0.75rem,3.75vw,1rem)] xl:text-[1rem]"
                      name="namatanaman"
                      id="namatanaman"
                      disabled
                      placeholder="Nama Tanaman"
                      value={week?.nama}
                    ></input>
                  </div>
                </div>
                <label className="font-bold mt-2 text-[clamp(0.75rem,3.75vw,1rem)] xl:text-[1rem]">
                  Tinggi Tanaman
                </label>
                <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
                  <div className="px-4  flex items-center rounded-md">
                    <input
                      className="w-full px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent bg-off-white text-[clamp(0.75rem,3.75vw,1rem)] xl:text-[1rem]"
                      name="namatanaman"
                      id="namatanaman"
                      placeholder="Nama Tanaman"
                      disabled
                      value={`${currentWeek?.tinggi || 0} Meter`}
                    ></input>
                  </div>
                </div>
                <label className="font-bold mt-2 text-[clamp(0.75rem,3.75vw,1rem)] xl:text-[1rem]">
                  Usia Tanaman
                </label>
                <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
                  <div className="px-4  flex items-center rounded-md">
                    <input
                      className="w-full px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent bg-off-white text-[clamp(0.75rem,3.75vw,1rem)] xl:text-[1rem]"
                      name="namatanaman"
                      id="namatanaman"
                      placeholder="Nama Tanaman"
                      value={`${currentWeek?.usia || 0} minggu`}
                      disabled
                    ></input>
                  </div>
                </div>
                <label className="font-bold mt-5 text-[clamp(0.75rem,3.75vw,1rem)] xl:text-[1rem]">
                  Volume Air Kolam (Liter)
                </label>
                <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
                  <div className="px-4 flex items-center ">
                    <input
                      className="px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent w-full bg-off-white text-[clamp(0.75rem,3.75vw,1rem)] xl:text-[1rem]"
                      name="number"
                      id="number"
                      placeholder="Litter"
                      disabled
                      value={`${currentWeek?.volume || 0} ml`}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="flex flex-col xl:w-2/5 order-1 md:order-2 2xl:items-end items-center md:justify-center">
              <div>
                <div className="xl:w-[35rem] 2xl:h-[30rem] 2xl:w-[35vw] xl:h-[23rem] flex-shrink-0">
                  <img
                    src={
                      currentWeek?.foto
                        ? `http://localhost:4000${currentWeek.foto}`
                        : "/assets/images/belumadafoto.png"
                    }
                    alt=""
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <div className="p-1 mt-2">
                  <button
                    className={`${
                      currentWeek
                        ? "border-primary text-primary"
                        : " border-gray-500 text-gray-500"
                    } bg-white p-2 rounded-md text-[clamp(0.75rem,3.75vw,1rem)]xl:text-[1rem] border border-solid `}
                    onClick={() => document.getElementById("thumbnail").click()}
                    disabled={!currentWeek}
                  >
                    Upload Foto
                  </button>
                  <input
                    id="thumbnail"
                    type="file"
                    className="w-full box-border hidden"
                    onChange={(event) => {
                      const file = event.target.files[0];
                      const idRecord = currentWeek.id;
                      handleFoto(idRecord, file);
                    }}
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 bg-white rounded-md flex flex-col md:flex-row gap-16 px-5">
            <div className="xl:w-[30%] w-[30%] md:w-[35%] lg:w-[40%] 2xl:w-[20%]">
              <h1 className="font-bold text-[clamp(0.75rem,3.75vw,1rem)] xl:text-[1rem]">
                Hasil Kalkulasi
              </h1>
              <h1 className="font-semibold mt-4 text-[clamp(0.875rem,4.37vw,1.1rem)] xl:text-[1rem]">
                <span className="text-[clamp(0.75rem,3.75vw,1rem)] xl:text-[1rem]">
                  Nutrisi A
                </span>
                : {currentWeek?.nutrient_a || 0} ml
              </h1>
              <h1 className="font-semibold mt-2 text-[clamp(0.875rem,4.37vw,1.1rem)] xl:text-[1rem]">
                <span className="text-[clamp(0.75rem,3.75vw,1rem)] xl:text-[1rem]">
                  Nutrisi B
                </span>
                : {currentWeek?.nutrient_b || 0} ml
              </h1>
            </div>
            <div className="flex-grow md:justify-end">
              <h1 className="font-bold">Catatan</h1>
              <textarea
                className="w-full h-40 border-2 border-gray-200 mt-2 rounded-md bg-off-white p-2"
                disabled
                value={currentWeek?.note || ""}
              />
            </div>
          </div>
          <div className="flex justify-end px-5 pb-5 gap-2">
            <button
              className={`${
                currentWeek ? "bg-primary" : "bg-slate-600"
              } rounded-md py-2 font-semibold text-white mt-8 px-3 text-xs sm:text-sm md:text-base`}
              onClick={handleActive}
            >
              Edit Pencatatan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
