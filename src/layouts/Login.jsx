import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';
import { toast } from 'sonner';

export default function Login() {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      localStorage.setItem('access_token', data.accessToken);
      localStorage.setItem('id', data.id);
      setIsLoggedIn(true);
      console.log(data);
      toast.success('Login Berhasil');
      setTimeout(() => {
<<<<<<< HEAD
        navigate('/home');
      }, 3000);
=======
        setLoading(false); // Hentikan loading
        setIsLoggedIn(true);
        navigate('/home'); // Navigasi ke halaman lain
      }, 1000);
      // const array = Object.values(response.data);
      // const { idUser } = array[1].data.id;
      sessionStorage.setItem(
        'id_user',
        JSON.stringify(response.data.data.data.id)
      );
      // const sesi = sessionStorage.getItem('id_user');
      // console.log('User ID:', sesi); // Simpan user ID jika diperlukan
>>>>>>> bad411d4d7ccbaf08ae630e1697975217a50f9c1
    } catch (error) {
      toast.error('Login Gagal');
    }
  };

  return (
    <>
      <div className="flex w-full h-[100vh] items-center justify-center">
        <div className="p-6 flex justify-center items-center w-full xl:w-[33%] z-10">
          <div className="w-full h-full flex flex-col items-center xl:items-start max-w-[450px]">
            <div className="w-[80px] h-[12%]">
              <img
                className="w-[80px] h-full"
                src="assets/images/Logoc.png"
                alt=""
              />
            </div>
            <div className="w-[120px] mt-2">
              <h1 className="text-black nunito text-[34px] font-bold">
                Selamat Datang
              </h1>
            </div>
            <div className="w-[70%] xl:w-full mt-1">
              <p className="nunito text-[15px] text-center xl:text-start text-[rgb(176,176,176)]">
                Silakan masuk untuk mulai mengoptimalkan pertanian hidroponik
                Anda.
              </p>
            </div>
            <div className="w-full mt-2">
              <form className="nunito flex flex-col" onSubmit={handleLogin}>
                <label className="font-bold mt-2" htmlFor="email">
                  Email
                </label>
                <div className="w-full border-2 border-gray-200 mt-2">
                  <div className="px-4 flex items-center">
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
                      value={email}
                      placeholder="Masukkan Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <label className="font-bold mt-2" htmlFor="passwordd">
                  Password
                </label>
                <div className="w-full border-2 border-gray-200 mt-2">
                  <div className="px-4 flex items-center">
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan Password"
                    />
                  </div>
                </div>
                {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
                <input
                  className="w-full bg-[rgb(16,185,129)] text-white py-2.5 mt-3 rounded-lg hover:cursor-pointer"
                  type="submit"
                  value="Masuk"
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

        <div className="hidden xl:block w-[67%] h-full bg-gray-100">
          <div className="h-full w-full flex items-center justify-center">
            <div className="w-[800px] h-[800px] relative">
              <div className="w-[250px] h-[100px] absolute top-[15%] left-[7%]">
                <img
                  className="w-full h-full"
                  src="assets/images/frame1.png"
                  alt=""
                />
              </div>
              <div className="w-[200px] h-[510px] absolute z-10 left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
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
            <div className="w-[67%] h-[290px] z-0 absolute bottom-0">
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
