import React, { useState, useEffect } from 'react';
<<<<<<< HEAD

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  getData,
  updateData,
  updatePassword,
  updateImage,
} from '../api/profile';
import { toast } from 'sonner';

export default function Profile() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [dataa, setData] = useState('');

=======
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const [pesan, setPesan] = useState('');
  const [show, setShow] = useState(false);
  const [dataa, setData] = useState('');
  const [showPopup, setShowPopup] = useState(false);
>>>>>>> bad411d4d7ccbaf08ae630e1697975217a50f9c1
  const id = sessionStorage.getItem('id_user');
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      id: dataa.id,
      full_name: dataa.full_name,
      birthday: dataa.birthday,
      city: dataa.city,
      email: dataa.email,
    },
  });

  const [userId, setUserId] = useState(null);
<<<<<<< HEAD
  const [selectedFile, setSelectedFile] = useState(null);
  const defaultImage = 'assets/images/orang.png';
  const profileImage = dataa.foto
    ? `http://localhost:4000/uploads/${dataa.foto}` // Path dari backend
    : defaultImage; // Gunakan default jika tidak ada

  useEffect(() => {
    const id_user = localStorage.getItem('id');
=======
  // const [selectedFile, setSelectedFile] = useState(null);
  const defaultImage = 'assets/images/orang.png';
  const profileImage = dataa.foto
    ? `http://localhost:4000/foto_profile/${dataa.foto}` // Path dari backend
    : defaultImage; // Gunakan default jika tidak ada
  useEffect(() => {
    const id_user = sessionStorage.getItem('id_user');
>>>>>>> bad411d4d7ccbaf08ae630e1697975217a50f9c1
    if (id_user) {
      setUserId(JSON.parse(id_user)); // Parse jika datanya berupa JSON
    }
    // Fungsi untuk mengambil data user dari API
    if (!userId) return;
    const fetchUsers = async () => {
      try {
<<<<<<< HEAD
        const response = await getData(id_user);

        setData(response.data[0]); // Simpan data ke state
=======
        const response = await axios.get(
          `http://localhost:4000/profile/user/${userId}`
        ); // Panggil API

        setData(response.data.data[0]); // Simpan data ke state
>>>>>>> bad411d4d7ccbaf08ae630e1697975217a50f9c1
      } catch (err) {
        setError(err.message); // Tangkap error
      }
    };

    fetchUsers(); // Panggil fungsi saat komponen dimuat
  }, [userId]);

  const muncul = () => {
    setShow(true);
  };
  const tutup = () => {
    setShow(false);
  };
  const onSub = async (data) => {
<<<<<<< HEAD
    const id_user = localStorage.getItem('id');

    try {
      const result = await updatePassword(id_user, data);
      console.log('Success:', result);
      toast.success('Berhasil Mengubah Password');
      setShow(false);
    } catch (error) {
      if (error.response) {
        // Respons dari server dengan status error
        console.error('Server Error:', error.response.data);
        toast.error('Gagal Mengubah Password');
      } else {
        // Kesalahan lainnya (jaringan, timeout, dll.)
        console.error('Error:', error.message);
        alert('Terjadi kesalahan jaringan');
      }
=======
    const id_user = sessionStorage.getItem('id_user');

    // if (!id_user) {
    //   alert('ID user tidak ditemukan. Silakan login ulang.');
    //   return;
    // }

    try {
      // Kirim data ke backend Express
      const response = await fetch(
        `http://localhost:4000/profile/updatepass/${id_user}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      // Periksa jika respons bukan JSON
      let result;
      try {
        result = await response.json();
      } catch (err) {
        console.error('Respons bukan JSON:', err);
        alert('Terjadi kesalahan pada server.');
        return;
      }

      if (response.ok) {
        // Navigasi ke profil
        navigate('/profile');

        // Tampilkan pop-up sukses
        setShowPopup(true);
        setPesan('Password berhasil di ganti!');

        // Hilangkan pop-up setelah 3 detik
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        // Tampilkan pesan error dari backend
        setShowPopup(true);
        setPesan(result.message || 'Gagal mengganti password');
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      }
    } catch (error) {
      setShowPopup(true);
      setPesan(result.message || 'Gagal mengganti password');
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
>>>>>>> bad411d4d7ccbaf08ae630e1697975217a50f9c1
    }
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
              <form action="" onSubmit={handleSubmit(onSub)} className="w-full">
                <input
                  type="hidden"
                  value={dataa.password}
                  {...register('oldPass1')}
                />
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
                    {...register('oldPass2')}
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
                    {...register('newPass')}
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

  const onSubmit = async (data) => {
<<<<<<< HEAD
    const id_user = localStorage.getItem('id');

    try {
      const result = await updateData(id_user, data);
      console.log('Success:', result);
      toast.success('Berhasil Mengupdate Data');
    } catch (error) {
      if (error.response) {
        // Respons dari server dengan status error
        console.error('Server Error:', error.response.data);
        toast.error('Gagal Mengupdate Data');
      } else {
        // Kesalahan lainnya (jaringan, timeout, dll.)
        console.error('Error:', error.message);
        alert('Terjadi kesalahan jaringan');
      }
=======
    const id_user = sessionStorage.getItem('id_user');

    try {
      // Kirim data ke backend Express
      const response = await fetch(
        `http://localhost:4000/profile/user/${id_user}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        navigate('/profile');

        // Tampilkan pop-up
        setShowPopup(true);
        setPesan('Data Berhasil Disimpan!');
        // Hilangkan pop-up setelah 2 detik
        setTimeout(() => {
          setShowPopup(false);
        }, 3000); // Menampilkan pesan sukses
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        alert(result.error); // Menampilkan pesan error jika ada
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengirim data');
>>>>>>> bad411d4d7ccbaf08ae630e1697975217a50f9c1
    }
  };

  useEffect(() => {
    if (dataa) {
      setValue('id', dataa.id);
      setValue('full_name', dataa.full_name);
      setValue('birthday', formatDate(dataa.birthday));
      setValue('city', dataa.city);
      setValue('email', dataa.email);
    }
  }, [dataa, setValue]);
  const formatDate = (dateString) => {
    const date = new Date(dateString); // Ubah ke objek Date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan di JavaScript 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // Formatkan ke YYYY-MM-DD
  };

  // Fungsi untuk menangani pemilihan file
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleUpload(file); // Langsung panggil handleUpload dengan file
    } else {
<<<<<<< HEAD
      toast.error('Tidak Ada File Yang Dipilih');
=======
      alert('Tidak ada file yang dipilih.');
>>>>>>> bad411d4d7ccbaf08ae630e1697975217a50f9c1
    }
  };
  // Fungsi untuk menangani pengunggahan foto
  const handleUpload = async (file) => {
    if (!file) {
      alert('Pilih file terlebih dahulu!');
      return;
    }

<<<<<<< HEAD
    const id_user = localStorage.getItem('id');
    try {
      const formData = new FormData();
      formData.append('file', file);
      const result = await updateImage(id_user, formData);

      toast.success('Berhasil Mengupdate Gambar');
      window.location.reload();
      return result;
    } catch (error) {
      console.error('Gagal mengunggah foto:', error);
      toast.error('Gagal Mengupdate Gambar');
=======
    const formData = new FormData();
    formData.append('file', file);
    const id_user = sessionStorage.getItem('id_user');
    try {
      const response = await axios.patch(
        `http://localhost:4000/profile/upload/${id_user}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setShowPopup(true);
      setPesan('Foto Berhasil Diupdate!');
      // Hilangkan pop-up setelah 2 detik
      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Menampilkan pesan sukses
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error('Gagal mengunggah foto:', error);
      alert('Terjadi kesalahan saat mengunggah file.');
>>>>>>> bad411d4d7ccbaf08ae630e1697975217a50f9c1
    } finally {
      setSelectedFile(null); // Reset file setelah diunggah
    }
  };

  return (
    <>
      {show && <Open />}

<<<<<<< HEAD
=======
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-start bg-opacity-50">
          <div className="bg-[rgb(16,185,129)] text-white py-2 px-4 mt-10 rounded shadow-md">
            {pesan}
          </div>
        </div>
      )}
>>>>>>> bad411d4d7ccbaf08ae630e1697975217a50f9c1
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
                  src={profileImage}
                  alt=""
                />
              </div>
              <div className="w-full flex flex-col items-center lg:flex-row gap-5 mt-7">
                <div
                  onClick={muncul}
                  className=" font-normal button text-center py-2 px-5 nunito text-[13px]  bg-primary text-white rounded-[0.438rem]    hover:cursor-pointer">
                  Ubah Password
                </div>
                <div
                  onClick={() => document.getElementById('fileInput').click()} // Trigger input file saat tombol diklik
                  className="font-normal button text-center py-2 px-5 nunito text-[13px] bg-primary text-white rounded-[0.438rem] hover:cursor-pointer">
                  Ganti foto profil
                </div>

                {/* Input file untuk memilih gambar */}
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }} // Menyembunyikan input file
                  onChange={handleFileChange}
                />

                {/* Tombol untuk mengunggah foto */}
                {/* {selectedFile && (
                  <button
                    onClick={handleUpload}
                    className="font-normal button text-center py-2 px-5 nunito text-[13px] bg-primary text-white rounded-[0.438rem] hover:cursor-pointer">
                    Update Foto
                  </button>
                )} */}
              </div>
            </div>
          </div>
          <div className="w-full mt-6 lg:mt-0  bg-white sm:max-w-[620px] lg:max-w-[700px] 2xl:max-w-[800px] rounded-lg  lg:w-[59%]  lg:order-1 flex items-center ">
            <div className="p-5 py-8">
              <form onSubmit={handleSubmit(onSubmit)}>
<<<<<<< HEAD
=======
                <input type="hidden" value={id} {...register('id')} />
>>>>>>> bad411d4d7ccbaf08ae630e1697975217a50f9c1
                <label htmlFor="" className="nunito font-bold">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  defaultValue={dataa.full_name}
                  {...register('full_name')}
                  className="w-full nunito  mt-1 py-2 px-2.5 mb-4 bg-gray-50"
                />
                <label htmlFor="" className="nunito font-bold ">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  defaultValue={
                    dataa.birthday ? formatDate(dataa.birthday) : ''
                  }
                  {...register('birthday')}
                  className="w-full  mt-1 nunito py-2 px-2.5 mb-4 bg-gray-50"
                />
                <label htmlFor="" className="nunito font-bold ">
                  Kota Domisili
                </label>
                <input
                  type="text"
                  defaultValue={dataa.city}
                  {...register('city')}
                  placeholder="Masukkan Kota Domisili"
                  className="w-full nunito mt-1 py-2 px-2.5 mb-4 bg-gray-50"
                />
                <label htmlFor="" className="nunito font-bold ">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue={dataa.email}
                  {...register('email')}
                  className="w-full  mt-1 py-2 px-2.5 bg-gray-50"
                />
                <div className="w-full flex justify-end">
                  <input
                    className=" font-normal button text-center py-1.5 px-10 nunito text-[14px]  bg-primary text-white rounded-[0.438rem] mt-7    hover:cursor-pointer"
                    type="submit"
                    value="Simpan"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
