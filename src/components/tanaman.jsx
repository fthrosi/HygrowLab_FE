import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { TambahTanaman, GetTanaman,DeleteTanaman } from "../api/tanaman";
import ModalTambah from "./modalTambahTanaman";
import CardTanaman from "./cardTanaman";
export default function Tanaman() {
  const [tanaman, setTanaman] = useState([]);
  const [formData, setFormData] = useState({
    jenis_tanaman: "",
    nama_tanaman: "",
    tanggal_tanam: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleTambah = async (e) => {
    e.preventDefault();

    try {
      await TambahTanaman(formData);
      setShow(false);
      fetchTanaman();
    } catch (error) {
      console.error(
        "Tambah tanaman gagal gagal:",
        error.response?.data || error.message
      );
    }
  };
  const [show, setShow] = useState(false);
  const tutup = () => {
    setShow(!show);
  };
  const navigate = useNavigate();
  const handleClick = (plant_id) => {
    navigate(`/detailtanaman/${plant_id}`);
  };
  const fetchTanaman = async () => {
    try {
      const data = await GetTanaman();
      setTanaman(data.data);
    } catch (error) {
      console.error("Gagal menampilkan data tanaman", error);
    }
  };
  const handleDelete = async (plant_id) =>{
    try{
      await DeleteTanaman(plant_id);
      fetchTanaman();
    }catch(error){
      console.error(
        "delet tanaman gagal",error
      );
    }
  }
  useEffect(() => {
    fetchTanaman();
  }, []);
  return (
    <div className="md:px-5">
      {show && (
        <ModalTambah
          formData={formData}
          handleChange={handleChange}
          handleTambah={handleTambah}
          tutup={tutup}
        />
      )}
      <div className="bg-white rounded-md mt-9 px-2 py-8">
        <div className="flex w-full justify-end">
          <div
            onClick={tutup}
            className="bg-primary 2xl:rounded-xl nunito text-white 2xl:py-3 2xl:px-6 py-1 px-2 rounded-md text-[clamp(0.75rem,3.75vw,1rem)] hover:cursor-pointer"
          >
            + Tambah Tanaman
          </div>
        </div>
        <div className="mt-3 grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-8 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {tanaman.map((item) => (
            <CardTanaman
              key={item.plant_id}
              handleClick={() => handleClick(item.plant_id)}
              item={item}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
