export default function Tanaman() {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-black text-[1.75rem] font-nunito font-bold">
          Detail Pencatatan
        </h1>
      </div>
      <div className="mt-5 w-full bg-white rounded-md px-10 py-5">
        <div className="flex justify-between">
          <div className="flex  justify-center ">
            <h1 className="text-xl">Minggu Ke-1</h1>
          </div>
          <div className="flex  justify-center ">
            <h1>Minggu Ke-2</h1>
          </div>
          <div className="flex  justify-center ">
            <h1>Minggu Ke-3</h1>
          </div>
          <div className="flex  justify-center ">
            <h1>Minggu Ke-4</h1>
          </div>
        </div>
        <div className="flex mt-10 gap-32 pb-10">
          <div className="flex flex-col w-1/2">
            <div className="flex gap-10">
              <div className="flex flex-col gap-3">
                <h1 className="font-bold">Tanggal</h1>
                <h1>12/12/2021</h1>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-bold">Status</h1>
                <div className="bg-yellow-200 px-2 py-1 rounded-full">
                  Berlangsung
                </div>
              </div>
            </div>
            <hr className="mt-5" />
            <form className="nunito flex flex-col" action="">
              <label className="font-bold mt-2">Nama Tanaman</label>
              <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
                <div className="px-4  flex items-center rounded-md">
                  <input
                    className="w-full px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent bg-off-white"
                    name="namatanaman"
                    id="namatanaman"
                    placeholder="Nama Tanaman"
                    value={"Kangkung"}
                  ></input>
                </div>
              </div>
              <label className="font-bold mt-2">Tinggi Tanaman</label>
              <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
                <div className="px-4  flex items-center rounded-md">
                  <input
                    className="w-full px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent bg-off-white"
                    name="namatanaman"
                    id="namatanaman"
                    placeholder="Nama Tanaman"
                    value={"1 Meter"}
                  ></input>
                </div>
              </div>
              <label className="font-bold mt-2">Usia Tanaman</label>
              <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
                <div className="px-4  flex items-center rounded-md">
                  <input
                    className="w-full px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent bg-off-white"
                    name="namatanaman"
                    id="namatanaman"
                    placeholder="Nama Tanaman"
                    value={"1 Minggu"}
                  ></input>
                </div>
              </div>
              <label className="font-bold mt-5">Volume Air Kolam (Liter)</label>
              <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
                <div className="px-4 flex items-center ">
                  <input
                    className="px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent w-full bg-off-white"
                    name="number"
                    id="number"
                    placeholder="Litter"
                    value={"1000 Litter"}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="w-[35rem] h-[23rem]">
              <img
                src="assets/images/foto.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="p-2">
              <input
                type="file"
                className="mt-2 border-collapse rounded-md shadow-md bg-white"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-white rounded-md flex gap-8">
          <div>
            <h1 className="font-bold">Hasil Kalkulasi</h1>
            <h1 className="font-semibold mt-4">Nutrisi A : 1000 ml</h1>
            <h1 className="font-semibold mt-2">Nutrisi B : 1000 ml</h1>
          </div>
          <div className="w-[20rem]">
            <h1>Catatan</h1>
            <textarea className="w-full h-40 border-2 border-gray-200 mt-2 rounded-md bg-off-white" />
          </div>
        </div>
        <div className=" flex justify-end">
          <button className="bg-primary rounded-md py-2 font-semibold text-white mt-8 px-3">
            Edit Pencatatan
          </button>
        </div>
      </div>
    </>
  );
}
