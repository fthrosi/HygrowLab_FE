import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './table';
import { Chart } from 'react-google-charts';

export default function Dasboard() {
  const [value, setValue] = useState(new Date());
  const [dataa, setData] = useState(null);
  const [eror, setError] = useState(null);
  const [record, setRecord] = useState([]); // Inisialisasi state sebagai array kosong
  const [chart, setChart] = useState([]); // Inisialisasi state sebagai array kosong
  const [tanaman, setTanaman] = useState([]); // Inisialisasi state sebagai array kosong

  const columns = [
    { key: 'plant_name', label: 'Nama Tanaman' },
    { key: 'listplant_name', label: 'Jenis Tanaman' },
    { key: 'created_at', label: 'Tanggal Mulai' },
  ];

  const options = {
    is3D: true,
    legend: { position: 'bottom', alignment: 'center' },
    pieHole: 0.4,
    sliceVisibilityThreshold: 0.02,
  };

  useEffect(() => {
    const id_user = localStorage.getItem('id');
    const fetchRecords = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/profile/record/${id_user}`
        );
        setRecord(response.data.data || []); // Simpan data atau array kosong jika null
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRecords();
  }, []);

  useEffect(() => {
    const id_user = localStorage.getItem('id');
    const fetchPlants = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/profile/plants/${id_user}`
        );
        setData(JSON.stringify(response.data.data[0]?.jumlah || 0));
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPlants();
  }, []);
  useEffect(() => {
    const id_user = localStorage.getItem('id');
    const fetchChart = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/profile/chart/${id_user}`
        );
        const apiData = response.data.data;

        // Transformasi data menjadi array sesuai kebutuhan Chart
        const chartData = apiData.map((item) => [item.name, item.jumlah]);
        const tanaman = apiData.map((item) => [
          item.name,
          item.jumlah,
          item.id,
        ]);
        setTanaman(tanaman);
        setChart([['Task', 'Hours per Day'], ...chartData]);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchChart();
  }, []);
  console.log(tanaman);
  const imageMapping = {
    1: '/assets/images/bayam.svg',
    2: '/assets/images/kangkung.svg',
    3: '/assets/images/sawi.svg',
  };
  return (
    <div className="w-full xl:h-screen py-9 px-5 items-center lg:items-start overflow-hidden flex flex-col gap-9">
      <div className="w-full flex items-start">
        <h1 className="nunito text-[20px] font-extrabold">Dashboard</h1>
      </div>
      <div className="flex w-full  flex-col gap-4 lg:flex-row max-w-[350px] lg:max-w-full ">
        <div className="flex items-center w-full lg:max-w-[400px] h-[150px] lg:h-[250px] flex-col px-7 py-3 bg-white rounded-md gap-5 lg:gap-16 order-2 lg:order-1 ">
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
        <div className="flex items-center w-full lg:max-w-[400px] h-[150px] lg:h-[250px] flex-col px-7 py-3 bg-white lg:gap-16  rounded-md gap-5 order-3 lg:order-2">
          <div className=" flex items-center gap-8">
            <img className="size-9" src="/assets/icons/Icon.png" alt="" />
            <p className="xl:text-[21px] font-bold text-[rgb(3,2,41)] nunito ">
              Total Tanaman Saya
            </p>
          </div>
          <div className=" flex items-center gap-6">
            <img className="size-16" src="/assets/icons/greens 7.png" alt="" />
            <p className="text-[35px] font-bold text-[rgb(3,2,41)] nunito ">
              {dataa}
            </p>
          </div>
        </div>
        <div className="flex items-center w-full flex-col lg:max-w-[550px] px-7 py-3 bg-white rounded-md gap-2 order-1 lg:order-3">
          <div className=" flex items-center gap-8">
            <img className="size-9" src="/assets/icons/Icon.png" alt="" />
            <p className="xl:text-[21px] font-bold text-[rgb(3,2,41)] nunito ">
              Data Tanaman Saya
            </p>
          </div>
          <div className="w-full h-full flex gap-2">
            {tanaman.map((item, index) => (
              <div
                key={index}
                className="w-[25%] h-full flex items-center flex-col gap-1">
                <img
                  className="size-20"
                  src={imageMapping[item[2]] || '/assets/images/default.svg'}
                  alt=""
                />
                <p className="text-[20px] font-semibold text-[rgb(3,2,41)] nunito ">
                  {item[1]}
                </p>
                <p className="text-[20px] font-semibold text-[rgb(3,2,41)] nunito ">
                  {item[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex xl:flex-row flex-col gap-5">
        <div className="w-full lg:w-[50%] bg-white rounded-md">
          <div className="p-5 w-full">
            <h1 className="nunito text-[23px] font-bold">
              Persentase Jenis Tanaman
            </h1>
            <Chart
              chartType="PieChart"
              data={chart}
              options={options}
              width={'85%'}
              height={'350px'}
            />
          </div>
        </div>

        <div className="w-full lg:w-[45%] bg-white rounded-md">
          <div className="p-5">
            <h1 className="nunito text-[23px] font-bold">
              Data Pencatatan Terbaru
            </h1>
            <div className="w-full overflow-x-auto">
              {/* Tabel dengan data */}
              <Table columns={columns} data={record || []} />
              {eror && <p className="text-red-500">{eror}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
