import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

export default function Register() {
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setErrors] = useState({ password: '', confirmPassword: '' });

  const validatePassword = () => {
    const error = {};

    if (confirmPassword && confirmPassword !== password) {
      error.confirmPassword = 'Passwords do not match.';
    }

    setErrors(error);
    return Object.keys(error).length === 0;
  };

  const onSubmit = async (data) => {
    data.password = password;
    if (validatePassword()) {
      try {
        // Kirim data ke backend Express
        const response = await fetch('http://localhost:4000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          alert(result.message); // Menampilkan pesan sukses
        } else {
          alert(result.error); // Menampilkan pesan error jika ada
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat mengirim data');
      }
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validatePassword()) {
  //     alert('Form submitted successfully!');
  //     // Add your form submission logic here
  //   }
  // };
  return (
    <>
      <div className=" flex w-full h-[100vh]   items-center justify-center ">
        <div className="p-6 flex justify-center items-center w-full xl:w-[33%]   z-10 ">
          <div className="w-full h-full flex flex-col items-center xl:items-start    max-w-[450px] ">
            <div className="w-[80px] h-[12%] ">
              <img
                className="w-[80px] h-full"
                src="assets/images/Logoc.png"
                alt=""
              />
            </div>
            <div className="w-[120px] mt-2">
              <h1 className="text-black nunito text-[34px] font-bold ">
                Selamat Datang
              </h1>
            </div>
            <div className="w-[70%] xl:w-full mt-1 ">
              <p className="nunito text-[15px] text-center xl:text-start text-[rgb(176,176,176)] ">
                Silakan daftar untuk mulai mengoptimalkan pertanian hidroponik
                Anda.
              </p>
            </div>
            <div className="w-full mt-2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="nunito flex flex-col"
                action="">
                <label className="font-bold" htmlFor="email">
                  Email
                </label>
                <div className="w-full border-2 border-gray-200 mt-2  ">
                  <div className="px-4  flex items-center">
                    <div className="w-[10%]">
                      <img
                        className="w-[18px] h-[18px]"
                        src="assets/images/email-tag.png"
                        alt=""
                      />
                    </div>
                    <input
                      className="w-[90%] px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent"
                      type="email"
                      {...register('email', {
                        required: 'Email wajib diisi',
                      })}
                      placeholder="Masukkan Email"
                    />
                  </div>
                </div>
                {errors.email && (
                  <p className="nunito" style={{ color: 'red' }}>
                    {errors.email.message}
                  </p>
                )}
                <label className="font-bold mt-2" htmlFor="email">
                  Nama
                </label>
                <div className="w-full border-2 border-gray-200 mt-2  ">
                  <div className="px-4  flex items-center">
                    <div className="w-[10%]">
                      <img
                        className="w-[18px] h-[18px]"
                        src="assets/images/username.png"
                        alt=""
                      />
                    </div>
                    <input
                      className="w-[90%] px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent"
                      type="text"
                      {...register('nama', { required: 'Nama wajib diisi' })}
                      placeholder="Masukkan Nama"
                    />
                  </div>
                </div>
                {errors.nama && (
                  <p className="nunito" style={{ color: 'red' }}>
                    {errors.nama.message}
                  </p>
                )}
                <label className="font-bold mt-2" htmlFor="passwordd">
                  Password
                </label>
                <div className="w-full border-2 border-gray-200 mt-2  ">
                  <div className="px-4  flex items-center">
                    <div className="w-[10%]">
                      <img
                        className="w-[18px] h-[18px]"
                        src="assets/images/key.png"
                        alt=""
                      />
                    </div>
                    <input
                      className="w-[90%] px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent"
                      type="password"
                      {...register('password')}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={validatePassword}
                      placeholder="Masukkan Password"
                    />
                  </div>
                  {errors.password && (
                    <p className="nunito" style={{ color: 'red' }}>
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <label className="font-bold mt-2" htmlFor="passwordd">
                  Konfirmasi Password
                </label>
                <div className="w-full border-2 border-gray-200 mt-2  ">
                  <div className="px-4  flex items-center">
                    <div className="w-[10%]">
                      <img
                        className="w-[18px] h-[18px]"
                        src="assets/images/key.png"
                        alt=""
                      />
                    </div>
                    <input
                      className="w-[90%] px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onBlur={validatePassword}
                      placeholder="Konfirmasi Password"
                    />
                  </div>
                </div>
                {error.confirmPassword && (
                  <p className="nunito" style={{ color: 'red' }}>
                    {error.confirmPassword}
                  </p>
                )}
                <input
                  className="w-full bg-[rgb(16,185,129)] text-white py-2.5 mt-3 rounded-lg hover:cursor-pointer"
                  type="submit"
                  value="Daftar"
                />
              </form>
              <p className="nunito text-[rgb(176,176,176)] mt-2">
                Sudah punya akun? &nbsp;
                <a className="font-bold" href="/login">
                  Masuk
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className=" hidden xl:block  w-[67%] h-full bg-gray-100  ">
          <div className="h-full w-full flex items-center  justify-center ">
            <div className="w-[800px] h-[800px] relative ">
              <div className="w-[250px] h-[100px] absolute top-[15%] left-[7%]">
                <img
                  className="w-full h-full"
                  src="assets/images/frame1.png"
                  alt=""
                />
              </div>
              <div className="w-[200px] h-[510px] absolute z-10   left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] ">
                <img
                  className="w-full h-full"
                  src="assets/images/frame2.png"
                  alt=""
                />
              </div>
              <div className="w-[230px] h-[190px] absolute bottom-[15rem] right-[3rem]">
                <img
                  className="w-full h-full"
                  src="assets/images/frame3.png"
                  alt=""
                />
              </div>
            </div>
            <div className=" w-[67%] h-[290px] z-0 absolute bottom-0 ">
              <img
                className="w-full h-full"
                src="assets/images/frame4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
