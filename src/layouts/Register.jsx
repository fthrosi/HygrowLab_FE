import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';

export default function Register() {
  const [formData, setFormData] = useState({
    fullname: '',
    date: '',
    CITY: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleDaftar = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const formattedData = {
        fullName: formData.fullname,
        email: formData.email,
        password: formData.password,
        city: formData.CITY,
        birthDate: formData.date,
    };

    try {
        await registerUser(formattedData);
        navigate('/login');
    } catch (error) {
        console.error("Registrasi gagal:", error.response?.data || error.message);
    }
};
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
              <form className="nunito flex flex-col" onSubmit={handleDaftar}>
                <label className="font-bold" htmlFor="fullname">
                  Fullname
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
                      type="fullname"
                      name="fullname"
                      id="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      placeholder="Masukkan Full Name"
                    />
                  </div>
                </div>
                <label className="font-bold">
                  BirthDay
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
                      type="date"
                      name="date"
                      id="date"
                      value={formData.date}
                      onChange={handleChange}
                      placeholder="Input Tanggal Lahir"
                    />
                  </div>
                </div>
                <label className="font-bold">
                  City
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
                      name="CITY"
                      id="CITY"
                      value={formData.CITY}
                      onChange={handleChange}
                      placeholder="Inputkan Kota"
                    />
                  </div>
                </div>
                <label className="font-bold mt-2" htmlFor="email">
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
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Masukkan Email"
                    />
                  </div>
                </div>
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
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Masukkan Password"
                    />
                  </div>
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
                      name="confirmPassword"
                      id="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Konfirmasi Password"
                    />
                  </div>
                </div>
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
