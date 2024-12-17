import React, { useState, useEffect } from "react";
import ModalUbahPassword from "./modalUbahPassword";
import { getData, updateData, updatePassword,updateImage } from "../api/profile";
import { toast } from "sonner";
export default function Profile() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  const [data, setData] = useState({});
  const [change, setChange] = useState({
    password: "",
    newPassword: "",
  });
  const handleEdit = (e) => {
    const { name, value } = e.target;
    setChange((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const edit = (e) => {
    e.preventDefault();
    setActive(true);
  };
  const muncul = () => {
    setShow(!show);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateData(data);
      fetchData();
      setActive(false);
      toast.success("Berhasil ubah data profile");
    } catch (error) {
      toast.error("Gagal update data profile");
    }
  };
  const fetchData = async () => {
    try {
      const response = await getData();
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error("Gagal menampilkan data", error);
    }
  };
  console.log(data)
  const handleUpdatePass = async () => {
    try {
      await updatePassword(change);
      muncul();
      setChange({ password: "", newPassword: "" });
      toast.success("Berhasil Update Password");
    } catch (error) {
      console.log(error)
      const errorMessage = error.response?.data?.error ||"Gagal Update Password";
      toast.error(errorMessage);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFoto = async (file) => {
      try {
        const formData = new FormData();
        formData.append("foto", file);
        console.log(file,formData.foto)
        const respons = await updateImage(formData);
        fetchData();
        toast.success("Berhasil Mengubah Foto");
        return respons;
      } catch (error) {
        toast.error("Gagal Ubah Foto");
      }
    };
  return (
    <div className="px-2 md:px-5">
      {show && (
        <ModalUbahPassword
          muncul={muncul}
          handleEdit={handleEdit}
          change={change}
          handleUpdatePass={handleUpdatePass}
        />
      )}
      <div className="w-full   py-9 flex flex-col gap-3 ">
        <h1 className="nunito text-[20px] sm:text-[24px] md:text-[26px] font-bold">
          Profil
        </h1>
        <div className="w-full flex sm:items-center flex-col lg:flex-row gap-5 mt-4">
          <div className="w-full lg:w-[50%]  bg-white lg:order-2  flex flex-col  rounded-lg items-center">
            <div className="py-8 lg:py-14">
              <div className="w-[200px] h-[200px] lg:w-[270px] lg:h-[270px] rounded-full   ">
                <img
                  className="w-full h-full rounded-full "
                  src={
                    data.newFoto
                      ? `${import.meta.env.VITE_BACKEND_PUBLIC_API_URL}/${data.newFoto}`
                      : "/assets/images/orang.png"
                  }
                  alt=""
                />
              </div>
              <div className="w-full flex flex-col items-center lg:flex-row gap-5 mt-7">
                <button
                  onClick={muncul}
                  className=" font-normal button text-center py-2 px-5 nunito text-[13px]  bg-primary text-white rounded-[0.438rem]    hover:cursor-pointer"
                >
                  Ubah Password
                </button>
                  <button
                    className="font-normal button text-center py-2 px-5 nunito text-[13px] bg-primary text-white rounded-[0.438rem] hover:cursor-pointer"
                    onClick={() => document.getElementById("profil").click()}
                  >
                    Ganti foto profil
                  </button>
                  <input
                    id="profil"
                    type="file"
                    className="w-full box-border hidden"
                    onChange={(event) => {
                      const file = event.target.files[0];
                      handleFoto(file);
                    }}
                    accept="image/*"
                  />
              </div>
            </div>
          </div>
          <div className="w-full mt-6 lg:mt-0  bg-white rounded-lg  lg:w-[50%]  lg:order-1 flex items-center ">
            <div className="p-5 py-8">
              <form onSubmit={handleUpdate}>
                <label className="nunito font-bold">Nama Lengkap</label>
                <input
                  name="full_name"
                  type="text"
                  value={data.full_name || ""}
                  onChange={handleChange}
                  disabled={!active}
                  className="w-full mt-1 py-2 px-2.5 mb-4 bg-gray-50"
                />
                <label className="nunito font-bold">Tanggal Lahir</label>
                <input
                  type="date"
                  name="tanggal"
                  value={data.tanggal || ""}
                  onChange={handleChange}
                  disabled={!active}
                  className="w-full mt-1 py-2 px-2.5 mb-4 bg-gray-50"
                />
                <label className="nunito font-bold">Kota Domisili</label>
                <input
                  type="text"
                  name="city"
                  value={data.city || ""}
                  onChange={handleChange}
                  disabled={!active}
                  className="w-full mt-1 py-2 px-2.5 mb-4 bg-gray-50"
                />
                <label className="nunito font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={data.email || ""}
                  onChange={handleChange}
                  disabled={!active}
                  className="w-full mt-1 py-2 px-2.5 bg-gray-50"
                />
                <div className="flex justify-end mt-5">
                  {active ? (
                    <button
                      type="submit"
                      className="bg-primary text-white rounded px-10 py-2"
                    >
                      Simpan
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={edit}
                      className="bg-primary text-white rounded px-10 py-2"
                    >
                      Edit Profile
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
