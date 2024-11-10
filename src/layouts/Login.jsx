import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true); 
    navigate('/dashboard/home');
  };
  return (
    <>
      <div className=" flex w-full h-[100vh]  items-center justify-center ">
        <div className="w-[33%] h-full flex justify-center items-center bg-white z-10 ">
          <div className="w-[90%]    flex justify-center items-center ">
            <div className="w-full h-full p-5   max-w-[450px] ">
              <div className="w-full h-[12%] ">
                <img
                  className="w-[80px] h-full"
                  src="assets/images/Logoc.png"
                  alt=""
                />
              </div>
              <div className="w-full mt-2">
                <h1 className="text-black nunito text-[34px] font-bold ">
                  Selamat Datang!👋
                </h1>
              </div>
              <div className="w-full mt-1">
                <p className="nunito text-[13px] text-[rgb(176,176,176)] ">
                  Silakan masuk untuk mulai mengoptimalkan pertanian hidroponik
                  Anda.
                </p>
              </div>
              <div className="w-full mt-2">
                <form className="nunito flex flex-col" action="">
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
                        name="passwordd"
                        id="passwordd"
                        placeholder="Masukkan Password"
                      />
                    </div>
                  </div>

                  <input
                    className="w-full bg-[rgb(16,185,129)] text-white py-2.5 mt-3 rounded-lg hover:cursor-pointer"
                    type="submit"
                    value="Masuk"
                    onClick={handleLogin}
                  />
                </form>
                <p className="nunito text-[rgb(176,176,176)] mt-2">
                  Belum punya akun? &nbsp;
                  <a className="font-bold" href="/register">
                    Daftar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden xl:block  w-[67%] h-full bg-gray-50  ">
          <div className="h-full w-full flex items-center justify-center ">
            <div className="w-full h-full relative ">
              <div className="w-[250px] h-[100px] absolute top-[150px] left-[240px]">
                <img
                  className="w-full h-full"
                  src="assets/images/frame1.png"
                  alt=""
                />
              </div>
              <div className="w-[200px] h-[480px] absolute z-10   left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] ">
                <img
                  className="w-full h-full"
                  src="assets/images/frame2.png"
                  alt=""
                />
              </div>
              <div className="w-[230px] h-[190px] absolute bottom-[270px] right-[230px]">
                <img
                  className="w-full h-full"
                  src="assets/images/frame3.png"
                  alt=""
                />
              </div>
              <div className=" w-full h-[290px] z-0 absolute bottom-0 left-[-100px]">
                <img
                  className="w-full h-full"
                  src="assets/images/frame4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
