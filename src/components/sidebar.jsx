import { Link, useLocation } from 'react-router-dom';
import { getData } from '../api/profile';
import { useState,useEffect } from 'react';

export default function Sidebar({ open, toggleSidebar, tutup }) {
  const location = useLocation();
  const [data,setData] = useState({});
  const isActive = (path) => {
    return location.pathname === path;
  };
  const fetchData = async () => {
      try {
        const response = await getData();
        const data = response.data;
        setData(data);
      } catch (error) {
        console.error('Gagal menampilkan data', error);
      }
    };
  useEffect(() => {
      fetchData();
    }, []);
  const route = [
    {
      name: 'Dashboard',
      to: '/home',
      svg: (
        <svg
          className="xl:size-7 size-[clamp(1.25rem,6.25vw,1.5rem)] 2xl:size-8 flex-shrink-0"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_310_15390)">
            <path
              d="M11.115 0.702127C10.809 0.426657 10.4118 0.274231 10 0.274231C9.58824 0.274231 9.19105 0.426657 8.885 0.702127L0 8.69879V17.3655C0 18.0727 0.280952 18.751 0.781049 19.2511C1.28115 19.7512 1.95942 20.0321 2.66667 20.0321H17.3333C18.0406 20.0321 18.7189 19.7512 19.219 19.2511C19.719 18.751 20 18.0727 20 17.3655V8.69879L11.115 0.702127ZM12.5 18.363H7.5V14.1746C7.5 13.5116 7.76339 12.8757 8.23223 12.4069C8.70107 11.938 9.33696 11.6746 10 11.6746C10.663 11.6746 11.2989 11.938 11.7678 12.4069C12.2366 12.8757 12.5 13.5116 12.5 14.1746V18.363ZM18.3333 17.363C18.3333 17.6282 18.228 17.8825 18.0404 18.0701C17.8529 18.2576 17.5985 18.363 17.3333 18.363H14.1667V14.1746C14.1667 13.0696 13.7277 12.0098 12.9463 11.2283C12.1649 10.4469 11.1051 10.008 10 10.008C8.89493 10.008 7.83512 10.4469 7.05372 11.2283C6.27232 12.0098 5.83333 13.0696 5.83333 14.1746V18.363H2.66667C2.40145 18.363 2.1471 18.2576 1.95956 18.0701C1.77202 17.8825 1.66667 17.6282 1.66667 17.363V9.44046L10 1.94046L18.3333 9.44046V17.363Z"
              fill={isActive('/home') ? '#10B981' : 'white'}
            />
          </g>
          <defs>
            <clipPath id="clip0_310_15390">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0 0.00787354)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: 'Tanaman Saya',
      to: '/tanaman',
      svg: (
        <svg
          className="xl:size-7 size-[clamp(1.25rem,6.25vw,1.5rem)] 2xl:size-8 flex-shrink-0"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_310_15414)">
            <path
              d="M19.3711 0.63927C19.1342 0.400242 18.8443 0.220494 18.5249 0.114643C18.2054 0.00879216 17.8655 -0.0201729 17.5328 0.0301033C12.5834 0.811809 7.99279 3.0927 4.38029 6.5651C3.74763 7.20132 3.25441 7.96231 2.93202 8.79963C2.60964 9.63694 2.46516 10.5322 2.5078 11.4284C2.56696 12.7285 3.0233 13.9791 3.81529 15.0118L0.0361328 18.7934L1.21446 19.9718L4.99279 16.1934C6.08783 17.0469 7.43777 17.508 8.82612 17.5026C9.74796 17.4985 10.6594 17.3079 11.5057 16.9422C12.3519 16.5766 13.1155 16.0435 13.7503 15.3751C17.0555 11.7783 19.2228 7.28423 19.9794 2.45844C20.028 2.12874 19.9983 1.79223 19.8926 1.47618C19.7869 1.16013 19.6083 0.873412 19.3711 0.63927V0.63927ZM4.17279 11.3476C4.14102 10.6832 4.24798 10.0194 4.48687 9.39859C4.72575 8.77777 5.09132 8.21352 5.56029 7.74177C5.92113 7.3801 6.29196 7.04594 6.66696 6.7251V12.1626L5.00863 13.8209C4.5033 13.0913 4.21363 12.2342 4.17279 11.3476V11.3476ZM12.5453 14.2234C11.7517 15.0884 10.6754 15.6416 9.51012 15.7833C8.34488 15.9251 7.1673 15.6462 6.18946 14.9968L10.3453 10.8409H15.1344C14.3937 12.057 13.5258 13.1909 12.5453 14.2234V14.2234ZM18.3278 2.22344C17.9332 4.64248 17.1699 6.98668 16.0644 9.17427H12.012L14.9644 6.22177L13.7861 5.04344L8.33362 10.4959V5.43844C11.1711 3.5175 14.3916 2.23495 17.7728 1.67927C17.7971 1.67595 17.8216 1.67428 17.8461 1.67427C17.9107 1.67418 17.9746 1.68687 18.0343 1.71161C18.0939 1.73635 18.1481 1.77266 18.1936 1.81844C18.2462 1.87011 18.2859 1.93355 18.3092 2.00353C18.3325 2.0735 18.3389 2.14802 18.3278 2.22094V2.22344Z"
              fill={isActive('/tanaman') ? '#10B981' : 'white'}
            />
          </g>
          <defs>
            <clipPath id="clip0_310_15414">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0 0.00787354)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: 'Kalkulasi Nutrisi',
      to: '/nutrisi',
      svg: (
        <svg
          className="xl:size-7 size-[clamp(1.25rem,6.25vw,1.5rem)] 2xl:size-8 flex-shrink-0"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_310_15462)">
            <path
              d="M0.833252 20.0079H19.1666V2.50787C19.1666 1.84483 18.9032 1.20895 18.4344 0.740107C17.9655 0.271266 17.3296 0.00787354 16.6666 0.00787354L3.33325 0.00787354C2.67021 0.00787354 2.03433 0.271266 1.56548 0.740107C1.09664 1.20895 0.833252 1.84483 0.833252 2.50787V20.0079ZM2.49992 2.50787C2.49992 2.28686 2.58772 2.0749 2.744 1.91862C2.90028 1.76234 3.11224 1.67454 3.33325 1.67454H16.6666C16.8876 1.67454 17.0996 1.76234 17.2558 1.91862C17.4121 2.0749 17.4999 2.28686 17.4999 2.50787V18.3412H2.49992V2.50787ZM4.16658 8.34121H15.8333V3.34121H4.16658V8.34121ZM5.83325 5.00787H14.1666V6.67454H5.83325V5.00787ZM4.16658 10.8412H5.83325V12.5079H4.16658V10.8412ZM7.49992 10.8412H9.16658V12.5079H7.49992V10.8412ZM12.4999 10.8412V12.5079H10.8333V10.8412H12.4999ZM4.16658 14.1745H5.83325V15.8412H4.16658V14.1745ZM7.49992 14.1745H9.16658V15.8412H7.49992V14.1745ZM14.1666 10.8412H15.8333V12.5079H14.1666V10.8412ZM10.8333 14.1745H15.8333V15.8412H10.8333V14.1745Z"
              fill={isActive('/nutrisi') ? '#10B981' : 'white'}
            />
          </g>
          <defs>
            <clipPath id="clip0_310_15462">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0 0.00787354)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];
  return (
    <div
      className={`min-h-screen gap-4 shrink-0 md:pt-6 lg:pt-9 pt-5 transition-all duration-300 ease-in-out bg-primary flex flex-col justify-between ${
        open
          ? 'xl:px-5 xl:w-[300px] px-5 w-full md:w-[250px]'
          : 'xl:w-[70px] md:px-3 xl:px-2 w-0 md:w-[70px]'
      }`}>
      <div>
        <div
          className={`flex items-center justify-between ${
            open ? 'md:justify-start' : 'md:justify-center'
          }`}>
          <div
            className={`flex gap-4 items-center ${
              open ? 'justify-start' : 'justify-center'
            }`}>
            <svg
              className="xl:size-12 size-9"
              viewBox="0 0 47 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.5 0C10.5215 0 0 10.9692 0 24.5C0 38.0308 10.5215 49 23.5 49C36.4785 49 47 38.0308 47 24.5C47 10.9692 36.4829 0 23.5 0ZM24.0046 40.9767V40.9858H22.9998V40.9767C15.4093 40.7022 9.33243 34.1975 9.33243 26.2154C13.2462 26.2154 16.787 27.8667 19.3493 30.5427C21.0649 32.3312 22.3417 34.5726 22.9954 37.0839V27.7523C20.455 27.6243 18.1647 26.499 16.4798 24.7379C14.6853 22.8715 13.5796 20.2871 13.5796 17.4373C17.976 17.4373 21.7055 20.4243 22.9998 24.5595V18.5717C21.6133 18.4528 20.3673 17.8124 19.4415 16.8472C18.406 15.7676 17.7654 14.2764 17.7654 12.6297C20.0996 12.6297 22.1135 14.0889 22.9998 16.1839V12.2546C22.2188 10.928 22.3812 9.16692 23.4868 8.01876C24.1318 8.69119 24.4565 9.57403 24.4565 10.4614C24.4565 11.0653 24.3073 11.6691 24.0046 12.2043V16.1153C24.9084 14.0614 26.896 12.6342 29.2083 12.6342C29.2083 14.281 28.5677 15.7722 27.5322 16.8518C26.6108 17.8124 25.3779 18.4436 24.0046 18.5763V24.468C25.3252 20.3831 29.0284 17.4464 33.3897 17.4464C33.3897 20.3008 32.2796 22.8807 30.4894 24.747C28.809 26.499 26.5318 27.6243 24.0046 27.7615V37.0931C24.6627 34.5818 25.9395 32.3404 27.6507 30.5518C30.213 27.8804 33.7538 26.2245 37.6676 26.2245C37.6676 34.1975 31.5951 40.7022 24.0046 40.9767Z"
                fill="white"
              />
            </svg>
            {open && (
              <h1 className={`nunito font-bold text-[1.5rem] text-white`}>
                HygrowLab
              </h1>
            )}
          </div>
          <button onClick={toggleSidebar} className="xl:size-7 md:hidden">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 flex-shrink-0">
              <path
                d="M1.0816 21.1761C-0.360534 22.738 -0.360534 25.2745 1.0816 26.8364L19.5409 46.8286C20.9831 48.3905 23.3251 48.3905 24.7672 46.8286C26.2093 45.2667 26.2093 42.7302 24.7672 41.1683L8.91527 24L24.7557 6.83171C26.1978 5.26982 26.1978 2.73331 24.7557 1.17142C23.3135 -0.390472 20.9715 -0.390472 19.5294 1.17142L1.07006 21.1636L1.0816 21.1761ZM41.6921 1.18391L23.2328 21.1761C21.7906 22.738 21.7906 25.2745 23.2328 26.8364L41.6921 46.8286C43.1342 48.3905 45.4763 48.3905 46.9184 46.8286C48.3605 45.2667 48.3605 42.7302 46.9184 41.1683L31.0665 24L46.9069 6.83171C48.349 5.26982 48.349 2.73331 46.9069 1.17142C45.4647 -0.390472 43.1227 -0.390472 41.6806 1.17142L41.6921 1.18391Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <ul className={`mt-5 md:mt-7 flex flex-col gap-2 md:gap-4`}>
          {route.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className={`nunito font-bold flex items-center  gap-4 hover:cursor-pointer xl:px-2 xl:py-2 md:py-1 md:px-2 px-2 py-2 rounded-lg ${
                  isActive(item.to) ? 'text-primary bg-white' : 'text-white'
                } ${open ? '' : 'justify-center'}`}>
                {item.svg}
                {open && (
                  <h1
                    className={`text-[clamp(0.75rem,5vw,1.3rem)] md:text-[1.25rem] xl:text-[1.313rem] ${
                      isActive(item.to) ? '' : ' hover:text-black'
                    }`}>
                    {item.name}
                  </h1>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-5">
        <ul className="flex flex-col gap-2">
          <li className="">
            <Link
              to="/profile"
              className={`nunito font-bold flex items-center  gap-4 hover:cursor-pointer xl:px-2 xl:py-2 md:py-1 md:px-2 px-2 py-2 rounded-lg text-white ${
                open ? '' : 'justify-center'
              }`}>
              <div
                className="bg-red-700 xl:size-7 size-[clamp(1.25rem,6.25vw,1.5rem)] 2xl:size-7 flex-shrink-0 rounded-full"
                style={{
                  backgroundImage: data.newFoto
                  ? `url(${import.meta.env.VITE_BACKEND_PUBLIC_API_URL}/${data.newFoto})`
                  : `url(/assets/images/orang.png)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}></div>
              {open && (
                <h1
                  className={`text-[clamp(0.75rem,5vw,1.3rem)] md:text-[1.25rem] xl:text-[1.313rem] hover:text-black`}>
                  Profil Saya
                </h1>
              )}
            </Link>
          </li>
          <li className="">
            <Link
              onClick={tutup}
              className={`nunito font-bold flex items-center  gap-4 hover:cursor-pointer xl:px-2 xl:py-2 md:py-1 md:px-2 px-2 py-2 rounded-lg text-white ${
                open ? '' : 'justify-center'
              }`}>
              <svg
                className="xl:size-6 size-[clamp(1.25rem,6.25vw,1.5rem)] 2xl:size-6 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1534_6728)">
                  <path
                    d="M1.66667 17.5V2.5C1.66667 2.27899 1.75446 2.06702 1.91074 1.91074C2.06702 1.75446 2.27899 1.66667 2.5 1.66667H6.66667V0H2.5C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5L0 17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H6.66667V18.3333H2.5C2.27899 18.3333 2.06702 18.2455 1.91074 18.0893C1.75446 17.933 1.66667 17.721 1.66667 17.5Z"
                    fill="white"
                  />
                  <path
                    d="M19.2685 8.23207L15.4468 4.4104L14.2685 5.58873L17.8218 9.14207L4.16602 9.16623V10.8329L17.8685 10.8087L14.2668 14.4104L15.4452 15.5887L19.2668 11.7671C19.7357 11.2985 19.9993 10.6628 19.9996 9.99991C20 9.337 19.737 8.70111 19.2685 8.23207Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1534_6728">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              {open && (
                <h1
                  className={`text-[clamp(0.75rem,5vw,1.3rem)] md:text-[1.25rem] xl:text-[1.313rem] hover:text-black`}>
                  Keluar Akun
                </h1>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
