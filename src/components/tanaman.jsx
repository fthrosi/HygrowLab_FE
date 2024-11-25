import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { TambahTanaman } from "../api/tanaman";
export default function Tanaman() {
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
    const token = localStorage.getItem('access_token');
    console.log(token);

    try {
      await TambahTanaman(formData);
      setShow(false);
    } catch (error) {
      console.error(
        "Tambah tanaman gagal gagal:",
        error.response?.data || error.message
      );
    }
  };
  const [show, setShow] = useState(false);
  const muncul = () => {
    setShow(true);
  };
  const tutup = () => {
    setShow(false);
  };
  const navigate = useNavigate();
  const hanleClick = () => {
    navigate("/detailtanaman");
  };
  const Open = () => {
    return (
      <>
        <div className="w-full h-full flex justify-center items-center   fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]">
          <div className="w-[550px] bg-white rounded-md">
            <div className="px-8 py-8">
              <h1 className="nunito text-[25px] font-bold text-center mb-6">
                Form Input Tanaman
              </h1>
              <form onSubmit={handleTambah} className="w-full">
                <label htmlFor="" className="nunito font-bold text-[18px]">
                  Jenis Tanaman
                </label>
                <div className="w-full border nunito mt-2 mb-3 ">
                  <select
                    className="w-full px-4 py-3"
                    name="jenis_tanaman"
                    id="jenis_tanaman"
                    onChange={handleChange}
                    value={formData.jenis_tanaman}
                  >
                    <option value="">--Pilih Tanaman--</option>
                    <option value="1">Sawi Pakcoy</option>
                    <option value="2">Kangkung</option>
                    <option value="3">Selada</option>
                    <option value="3">Bayam</option>
                    <option value="3">Sawi Hijau</option>
                  </select>
                </div>
                <label htmlFor="" className="nunito font-bold text-[18px] ">
                  Nama Tanaman
                </label>
                <div className="w-full border nunito mt-2 ">
                  <input
                    className="w-full px-4 py-3"
                    type="text"
                    name="nama_tanaman"
                    onChange={handleChange}
                    value={formData.nama_tanaman}
                    placeholder="Masukkan nama tanaman"
                  />
                </div>
                <label htmlFor="" className="nunito font-bold text-[18px] ">
                  Tanggal Tanam
                </label>
                <div className="w-full border nunito mt-2 ">
                  <input
                    className="w-full px-4 py-3"
                    type="date"
                    placeholder="Masukkan nama tanaman"
                    name="tanggal_tanam"
                    onChange={handleChange}
                    value={formData.tanggal_tanam}
                  />
                </div>
                <div className="w-full flex justify-end gap-3">
                  <button
                    className="bg-[rgb(16,185,129)] py-3 px-14 rounded-xl mt-5 nunito text-white  "
                    type="submit"
                  >
                    Simpan
                  </button>
                  <button
                    onClick={tutup}
                    className=" bg-red-500 py-3 px-14 rounded-xl mt-5 nunito text-white  "
                  >
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

  return (
    <>
      {show && <Open />}
      <div className="w-full h-full bg-white rounded-md mt-9 p-5">
        <div className="flex w-full justify-end">
          <div
            onClick={muncul}
            href=""
            className="border bg-[rgb(16,185,129)] rounded-xl nunito text-white py-3 px-6 hover:cursor-pointer"
          >
            + Tambah Tanaman
          </div>
        </div>
        <div className="mx-auto ">
          <div className="w-[240px] h-[260px] shadow-2xl rounded-md">
            <div className="w-full h-[60%]" onClick={hanleClick}>
              <div
                className="w-full h-full bg-cover p-1"
                style={{ backgroundImage: `url("/assets/images/foto.png")` }}
              >
                <div className="flex justify-end">
                  <div className="w-[26px] h-[26px] rounded-full bg-off-white flex justify-center items-center">
                    <img src="assets/icons/Group.png" alt="icon" />
                  </div>
                </div>
              </div>
              <div className="px-3 mt-6">
                <h1 className="text-primary text-[18px]">Pakcoy</h1>
              </div>
              <div className="flex justify-between px-3 mt-1">
                <h1 className="font-bold text-[18px]">Pakcoy Kolam 4</h1>
                <img src="/assets/icons/share.png" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
