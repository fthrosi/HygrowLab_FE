import React from 'react';
import Table from './table';

export default function Dasboard() {
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
    <div className="w-full xl:h-screen py-9 overflow-hidden flex flex-col gap-9">
      <h1 className="nunito text-[20px] font-extrabold">Dashboard</h1>
      <div className="flex w-full ">
        <div className="flex items-center w-full max-w-[320px]   xl:w-[25%] justify-between px-7 py-1 bg-white rounded-md gap-5">
          <div className="">
            <p className="xl:text-[21px] font-extrabold nunito">5</p>
            <p className="xl:text-[21px] font-medium text-[rgb(3,2,41)] nunito ">
              Jumlah Tanaman
            </p>
          </div>
          <img className="size-13" src="/assets/icons/Icon.png" alt="" />
        </div>
      </div>
      <div className="w-full  flex xl:flex-row flex-col gap-5">
        {/* <div className="bg-white w-full rounded-md">
          <div className="p-5">
            <Table columns={columns} data={data} />
          </div>
        </div> */}
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
