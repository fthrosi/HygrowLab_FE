import React, { useState } from 'react';
import Table from './table';

import Calendar from 'react-calendar';

export default function Dasboard() {
  const [value, setValue] = useState(new Date());
  const columns = [
    { key: 'name', label: 'Nama Tanaman' },
    { key: 'jenis', label: 'Jenis Tanaman' },
    { key: 'tanggal', label: 'Tanggal Mulai' },
  ];

  const data = [
    { name: 'Bayam Kolam 1', jenis: 'bayam', tanggal: '03-09-2024' },
    { name: 'Sawi Kolam 2', jenis: 'sawi', tanggal: '03-09-2024' },
    { name: 'kangkung kolam 3', jenis: 'kangkung', tanggal: '03-09-2024' },
  ];
  return (
    <div className="w-full xl:h-screen py-9 items-center lg:items-start overflow-hidden flex flex-col gap-9">
      <div className="w-full flex items-start">
        <h1 className="nunito text-[20px] font-extrabold ">Dashboard</h1>
      </div>
      <div className="flex w-full  flex-col gap-4 lg:flex-row max-w-[350px] lg:max-w-full ">
        <div className="flex items-center w-full h-[150px] flex-col px-7 py-3 bg-white rounded-md gap-5 order-2 lg:order-1 ">
          <div className=" flex items-center gap-8">
            <img className="size-9" src="/assets/icons/Icon.png" alt="" />
            <p className="xl:text-[21px] font-bold text-[rgb(3,2,41)] nunito ">
              Jenis Tanaman
            </p>
          </div>
          <div className=" flex items-center gap-6">
            <img className="size-16" src="/assets/icons/greens 7.png" alt="" />
            <p className="text-[35px] font-bold text-[rgb(3,2,41)] nunito ">
              5
            </p>
          </div>
        </div>
        <div className="flex items-center w-full h-[150px] flex-col px-7 py-3 bg-white rounded-md gap-5 order-3 lg:order-2">
          <div className=" flex items-center gap-8">
            <img className="size-9" src="/assets/icons/Icon.png" alt="" />
            <p className="xl:text-[21px] font-bold text-[rgb(3,2,41)] nunito ">
              Total Tanaman Saya
            </p>
          </div>
          <div className=" flex items-center gap-6">
            <img className="size-16" src="/assets/icons/greens 7.png" alt="" />
            <p className="text-[35px] font-bold text-[rgb(3,2,41)] nunito ">
              5
            </p>
          </div>
        </div>
        <div className="flex items-center w-full flex-col px-7 py-3 bg-white rounded-md gap-2 order-1 lg:order-3">
          <div className=" flex items-center gap-8">
            <p className="xl:text-[21px] font-bold text-[rgb(3,2,41)] nunito ">
              Kalender
            </p>
          </div>
          <Calendar onChange={setValue} value={value} />
        </div>
      </div>
      <div className="w-full  flex xl:flex-row flex-col gap-5">
        <div className="w-full bg-white rounded-md">
          <div className="p-5">
            <h1 className="nunito text-[23px] font-bold">
              Data Pencatatan Terbaru
            </h1>
            <div className="w-full overflow-x-auto">
              <Table columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
