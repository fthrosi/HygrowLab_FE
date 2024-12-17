import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TambahTanaman, GetTanaman, DeleteTanaman } from "../api/tanaman";
import ModalTambah from "./modalTambahTanaman";
import CardTanaman from "./cardTanaman";
import { toast } from "sonner";

<<<<<<< HEAD
=======
import axios from 'axios';

>>>>>>> bad411d4d7ccbaf08ae630e1697975217a50f9c1
export default function Tanaman() {
  const [tanaman, setTanaman] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    jenis_tanaman: "",
    nama_tanaman: "",
    tanggal_tanam: "",
  });
  
  // Pagination configuration
  const cardsPerPage = 8;
  const totalPages = Math.ceil(tanaman.length / cardsPerPage);

  // Paginate the tanaman data
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return tanaman.slice(startIndex, endIndex);
  };

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
      toast.success("Berhasil Menambah Tanaman");
    } catch (error) {
      toast.error("Gagal Menambah Tanaman");
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
      // Reset to first page when data is fetched
      setCurrentPage(1);
    } catch (error) {
      console.error("Gagal menampilkan data tanaman", error);
    }
  };
  
  const handleDelete = async (plant_id) => {
    try {
      await DeleteTanaman(plant_id);
      fetchTanaman();
    } catch(error) {
      console.error("Delete tanaman gagal", error);
    }
  };

  // Pagination handlers
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    fetchTanaman();
  }, []);

<<<<<<< HEAD
=======
    fetchUsers(); // Panggil fungsi saat komponen dimuat
  }, [userId]);

  const Open = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    useEffect(() => {
      const id_user = sessionStorage.getItem('id_user');
      if (id_user) {
        setUserId(JSON.parse(id_user)); // Parse jika datanya berupa JSON
      }
    }, []);
    const onSubmit = async (data) => {
      try {
        // Kirim data ke backend Express
        const response = await fetch('http://localhost:4000/tanaman/tanaman', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          setShow(false);
          navigate('/detailtanaman');
        } else {
          alert(result.error); // Menampilkan pesan error jika ada
        }
      } catch (error) {
        console.error('Error:', error);

        alert('Terjadi kesalahan saat mengirim data');
      }
      // Tutup modal setelah submit
    };

    return (
      <>
        <div className="w-full h-full  flex justify-center items-center   fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]">
          <div className="xl:w-[550px] xl:h-[370px] w-[93%] max-w-[450px] md:max-w-[500px]  bg-white rounded-md">
            <div className="xl:px-8 xl:py-8 px-3 py-3 lg:px-5 lg:py-5">
              <h1 className="nunito xl:text-[25px] md:text-[20px] font-bold text-center mb-6">
                Form Input Tanaman
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <label
                  htmlFor=""
                  className="nunito font-bold text-[13px] md:text-[16px] xl:text-[18px]">
                  Jenis Tanaman
                </label>
                <div className="w-full border nunito mt-2 mb-3 ">
                  <select
                    {...register('plant_list_id')}
                    className="w-full text-[13px] md:text-[15px] md:px-4 md:py-3 px-2 py-2">
                    <option value="">--Pilih Tanaman--</option>
                    <option value="2">Kangkung</option>
                    <option value="1">Sawi Pakcoy</option>
                    <option value="3">Selada</option>
                    <option value="4">Bayam</option>
                    <option value="5">Sawi Hijau</option>
                  </select>
                </div>
                <input type="hidden" {...register('id_user')} value={userId} />
                <label
                  htmlFor=""
                  className="nunito font-bold text-[13px] md:text-[16px] xl:text-[18px] ">
                  Nama Tanaman
                </label>
                <div className="w-full border nunito mt-2 ">
                  <input
                    {...register('name', {
                      required: 'Nama tanaman wajib diisi',
                    })}
                    className="w-full md:px-4 md:py-3 px-2 py-2 text-[13px]  md:text-[15px]"
                    type="text"
                    placeholder="Masukkan nama tanaman"
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

  const hanleClick = () => {
    navigate('/detailtanaman');
  };
  // const handleButtonClick = async (id, e) => {
  //   e.stopPropagation(); // Menghentikan propagasi event ke elemen induk
  //   try {
  //     // Kirim data ke backend Express
  //     const response = await fetch(
  //       `http://localhost:4000/tanaman/tanaman/${id}`,
  //       {
  //         method: 'DELETE',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     );

  //     const result = await response.json();

  //     if (response.ok) {
  //       setShow(false);
  //     } else {
  //       alert(result.error); // Menampilkan pesan error jika ada
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);

  //     alert('Terjadi kesalahan saat mengirim data');
  //   }
  // };
  console.log(plant);

  // Tampilkan loading atau error jika ada
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
>>>>>>> bad411d4d7ccbaf08ae630e1697975217a50f9c1
  return (
    <div className="md:px-5 pb-5">
      {show && (
        <ModalTambah
          formData={formData}
          handleChange={handleChange}
          handleTambah={handleTambah}
          tutup={tutup}
        />
      )}
      <div className="mt-5 px-2 py-3">
        <div className="flex w-full justify-end px-4">
          <div
            onClick={tutup}
            className="bg-primary 2xl:rounded-xl nunito text-white 2xl:py-3 2xl:px-6 py-1 px-2 rounded-md text-[clamp(0.75rem,3.75vw,1rem)] hover:cursor-pointer"
          >
            + Tambah Tanaman
          </div>
        </div>
<<<<<<< HEAD
        <div className="mt-10 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-8 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {getPaginatedData().map((item) => (
            <CardTanaman
              key={item.plant_id}
              handleClick={() => handleClick(item.plant_id)}
              item={item}
              onDelete={handleDelete}
            />
          ))}
=======
        <div className="mx-auto mt-6 flex flex-wrap gap-4  ">
          {Array.isArray(plant) &&
            plant.map((plants) => (
              <div
                key={plants.id}
                className="xl:w-[240px] hover:cursor-pointer xl:h-[260px] w-[46%]  h-[180px] sm:w-[30%] md:w-[170px] md:h-[200px] shadow-2xl rounded-md">
                <div className="w-full h-[60%] " onClick={hanleClick}>
                  <div
                    className="w-full h-full bg-cover p-1"
                    style={{
                      backgroundImage: `url("/assets/images/foto.png")`,
                    }}>
                    <div className="flex justify-end">
                      <div
                        // onClick={handleButtonClick(plants.id)}
                        className="w-[26px] h-[26px] rounded-full bg-off-white flex justify-center items-center">
                        <img src="assets/icons/Group.png" alt="icon" />
                      </div>
                    </div>
                  </div>
                  <div className="px-3 mt-2">
                    <h1 className="text-primary text-[14px] md:text-[16px]  xl:text-[20px]">
                      {plants.name_name}
                    </h1>
                  </div>
                  <div className="flex justify-between px-3 mt-1">
                    <h1 className="font-bold text-[12px] md:text-[16px] xl:text-[20px]">
                      {plants.name}
                    </h1>
                    <img
                      className=" size-5 md:size-6 xl:size-8 "
                      src="/assets/icons/share.png"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            ))}
>>>>>>> bad411d4d7ccbaf08ae630e1697975217a50f9c1
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 space-x-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
    </div>
  );
}