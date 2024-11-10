export default function Nutrisi() {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-black text-[1.75rem] font-nunito font-bold">
          Kalkulasi Nutrisi
        </h1>
      </div>
      <div className="flex mt-5 justify-between">
        <div className="w-[36.813rem] h-[30.875rem] bg-white py-[2.906rem] px-[3.313rem] flex flex-col gap-[2.375rem] rounded-md">
          <form className="nunito flex flex-col" action="">
            <label className="font-bold mt-2">Nama Tanaman</label>
            <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
              <div className="px-4  flex items-center rounded-md">
                <select
                  className="w-full px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent bg-off-white"
                  name="namatanaman"
                  id="namatanaman"
                  placeholder="--Pilih Tanaman--"
                >
                  <option value="">--Pilih Tanaman--</option>
                  <option value="1">Tomat</option>
                  <option value="2">Selada</option>
                  <option value="3">Kangkung</option>
                  <option value="4">Bayam</option>
                </select>
              </div>
            </div>
            <label className="font-bold mt-5">Volume Air Kolam (Liter)</label>
            <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
              <div className="px-4 flex items-center ">
                <input
                  className="px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent w-full bg-off-white"
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Litter"
                />
              </div>
            </div>
            <label className="font-bold mt-5">Usia Tanaman</label>
            <div className="w-full border-2 border-gray-200 mt-2 rounded-md bg-off-white">
              <div className="px-4 flex items-center">
                <input
                  className="px-2 py-2 focus:outline-none focus:ring-0 focus:border-transparent w-full bg-off-white"
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Minggu Ke-"
                />
              </div>
            </div>
            <div className="w-full flex justify-end mt-5">
              <input
                className="w-1/3 bg-[rgb(16,185,129)] text-white py-2.5 mt-3 rounded-lg hover:cursor-pointer flex "
                type="submit"
                value="Hitung Nutrisi"
              />
            </div>
          </form>
        </div>
        <div className="w-[36.9rem] h-[30.875rem] bg-white flex rounded-md">
          <img
            src="/assets/images/asset5.png"
            alt="asset"
            className="size-96 mt-10"
          />
          <div className="flex flex-col">
            <h1 className="font-bold text-primary text-[2rem] pt-20 px-1">
              Hasil Kalkulasi
            </h1>
            <h1 className="mt-10 font-semibold">Nutrisi A : 0 ML</h1>
            <h1 className="mt-2 font-semibold">Nutrisi B : 0 ML</h1>
            <div>
              <button className="bg-primary rounded-md py-2 font-bold text-white mt-8 px-3">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
