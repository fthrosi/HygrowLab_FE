export default function ModalEdit({
  editData,
  handleChange,
  handleEdit,
  tutup,
  errors
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(editData);
  };
  return (
    <div className="w-full h-full flex justify-center items-center   fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50">
      <div className="w-[550px] bg-white rounded-md">
        <div className="px-8 py-8">
          <h1 className="nunito text-[25px] font-bold text-center mb-6">
            Form Edit Catatan
          </h1>
          <form onSubmit={handleSubmit} className="w-full">
            <label htmlFor="" className="nunito font-bold text-[18px] ">
              Tinggi Tanaman
            </label>
            <div className="w-full border nunito mt-2 ">
              <input
                className="w-full px-4 py-3"
                type="number"
                name="tinggi_Tanaman"
                onChange={handleChange}
                value={editData.tinggi_Tanaman}
                placeholder="Masukkan nama tanaman"
              />
            </div>
            {errors.tinggi_Tanaman && (
              <p className="text-red-500 text-sm">{errors.tinggi_Tanaman}</p>
            )}
            <label htmlFor="" className="nunito font-bold text-[18px]">
              Catatan Tanam
            </label>

            <textarea
              className="w-full h-40 border-2 border-gray-200 mt-2 rounded-md bg-off-white p-2"
              onChange={handleChange}
              value={editData.note}
              name="note"
            />
            {errors.note && (
              <p className="text-red-500 text-sm">{errors.note}</p>
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
