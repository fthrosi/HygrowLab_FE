export default function ModalTambah({
  formData,
  handleChange,
  handleTambah,
  tutup,
  errors,
}) {
  return (
    <div className="w-full h-full flex justify-center items-center   fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50">
      <div className="w-[550px] bg-white rounded-md">
        <div className="px-8 py-8">
          <h1 className="nunito text-[25px] font-bold text-center mb-6">
            Form Input Tanaman
          </h1>
          <form onSubmit={handleTambah} className="w-full">
            <label htmlFor="" className="nunito font-bold text-[18px]">
              Jenis Tanaman
            </label>
            <div className="w-full border nunito mt-2 mb-3 ">
              <select
                className="w-full px-4 py-3"
                name="jenis_tanaman"
                id="jenis_tanaman"
                onChange={handleChange}
                value={formData.jenis_tanaman}
              >
                <option value="">--Pilih Tanaman--</option>
                <option value="1">Sawi Pakcoy</option>
                <option value="2">Kangkung</option>
                <option value="3">Selada</option>
                <option value="4">Bayam</option>
                <option value="5">Sawi Hijau</option>
              </select>
            </div>
            {errors.jenis_tanaman && (
              <p className="text-red-500 text-sm">{errors.jenis_tanaman}</p>
            )}
            <label htmlFor="" className="nunito font-bold text-[18px] ">
              Nama Tanaman
            </label>
            <div className="w-full border nunito mt-2 ">
              <input
                className="w-full px-4 py-3"
                type="text"
                name="nama_tanaman"
                onChange={handleChange}
                value={formData.nama_tanaman}
                placeholder="Masukkan nama tanaman"
              />
            </div>
            {errors.nama_tanaman && (
              <p className="text-red-500 text-sm">{errors.nama_tanaman}</p>
            )}
            <label htmlFor="" className="nunito font-bold text-[18px] ">
              Tanggal Tanam
            </label>
            <div className="w-full border nunito mt-2 ">
              <input
                className="w-full px-4 py-3"
                type="date"
                placeholder="Masukkan nama tanaman"
                name="tanggal_tanam"
                onChange={handleChange}
                value={formData.tanggal_tanam}
              />
            </div>
            {errors.tanggal_tanam && (
              <p className="text-red-500 text-sm">{errors.tanggal_tanam}</p>
            )}
            <div className="w-full flex justify-end gap-3">
              <button
                className="bg-[rgb(16,185,129)] py-3 px-14 rounded-xl mt-5 nunito text-white  "
                type="submit"
              >
                Simpan
              </button>
              <button
                onClick={tutup}
                className=" bg-red-500 py-3 px-14 rounded-xl mt-5 nunito text-white  "
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
