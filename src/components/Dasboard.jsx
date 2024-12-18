import React, { useState, useEffect } from "react";
import Table from "./table";
import { Chart } from "react-google-charts";
import { GetRecord, GetPlants, GetChart } from "../api/tanaman";

export default function Dasboard() {
  const [dataa, setData] = useState(null);
  const [eror, setError] = useState(null);
  const [record, setRecord] = useState([]);
  const [chart, setChart] = useState([]);
  const [tanaman, setTanaman] = useState([]);

  const columns = [
    { key: "plant_name", label: "Nama Tanaman" },
    { key: "listplant_name", label: "Jenis Tanaman" },
    { key: "created_at", label: "Tanggal Mulai" },
  ];

  const options = {
    is3D: true,
    legend: { position: "bottom", alignment: "center" },
    pieHole: 0.4,
    sliceVisibilityThreshold: 0.02,
  };
  const fetchRecords = async () => {
    try {
      const response = await GetRecord();
      setRecord(response.data || []);
    } catch (err) {
      setError(err.message);
    }
  };
  const fetchPlants = async () => {
    try {
      const response = await GetPlants();
      setData(JSON.stringify(response.data[0]?.jumlah || 0));
    } catch (err) {
      setError(err.message);
    }
  };
  const fetchChart = async () => {
    try {
      const response = await GetChart();
      const apiData = response.data;
      const chartData = apiData.map((item) => [item.name, item.jumlah]);
      const tanaman = apiData.map((item) => [item.name, item.jumlah, item.id]);
      setTanaman(tanaman);
      setChart([["Task", "Hours per Day"], ...chartData]);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchRecords();
    fetchPlants();
    fetchChart();
  }, []);
  const imageMapping = {
    4: "/assets/images/bayam.svg",
    2: "/assets/images/kangkung.svg",
    1: "/assets/images/sawi.svg",
  };
  console.log(record)
  return (
    <div className="w-full xl:max-h-screen py-9 px-5 items-center lg:items-start overflow-hidden flex flex-col gap-9">
      <div className="w-full flex items-start">
        <h1 className="nunito text-[20px] font-extrabold">Dashboard</h1>
      </div>
      <div className="flex w-full  flex-col gap-4 lg:flex-row">
        <div className="flex items-center w-full lg:max-w-[25%] h-[150px] lg:h-[250px] flex-col px-7 py-3 bg-white rounded-md gap-5 lg:gap-16 order-2 lg:order-1 ">
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
        <div className="flex items-center w-full lg:max-w-[25%] h-[150px] lg:h-[250px] flex-col px-7 py-3 bg-white lg:gap-16  rounded-md gap-5 order-3 lg:order-2">
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
        <div className="flex items-center w-full flex-col lg:max-w-[50%] px-7 py-3 bg-white rounded-md gap-6 order-1 lg:order-3">
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
                className="w-[25%] h-full flex items-center flex-col gap-1"
              >
                <img
                  className="size-20"
                  src={imageMapping[item[2]] || "/assets/images/default.svg"}
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
          <div className="p-5">
            <h1 className="nunito text-[23px] font-bold">
              Persentase Jenis Tanaman
            </h1>
            <div className="flex justify-center">
              <Chart
                chartType="PieChart"
                data={chart}
                options={options}
                width={"85%"}
                className="justify-self-center"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] bg-white rounded-md">
          <div className="p-5">
            <h1 className="nunito text-[23px] font-bold">
              Data Pencatatan Terbaru
            </h1>
            <div className="w-full overflow-x-auto">
              <Table columns={columns} data={record || []} />
              {eror && <p className="text-red-500">{eror}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
