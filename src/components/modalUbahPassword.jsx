export default function ModalUbahPassword({muncul,handleEdit,change,handleUpdatePass}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdatePass(change);
      };
  return (
    <div className="w-full h-full  flex justify-center items-center   fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]">
      <div className="xl:w-[550px] xl:h-[370px] w-[93%] max-w-[450px] md:max-w-[500px]  bg-white rounded-md">
        <div className="xl:px-8 xl:py-8 px-5 py-5 ">
          <h1 className="nunito xl:text-[25px] md:text-[20px] font-bold text-center mb-6">
            Silahkan Ganti Password Anda
          </h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <label className="nunito font-bold text-[13px] md:text-[16px] xl:text-[18px]">
              Password Lama
            </label>
            <div className="w-full border nunito mt-2 ">
              <input
                className="w-full md:px-4 md:py-3 px-2 py-2 text-[13px]  md:text-[15px]"
                type="password"
                placeholder="Masukkan Password Lama"
                onChange={handleEdit}
                value={change.password}
                required
                name="password"
              />
            </div>
            <label className="nunito font-bold text-[13px] md:text-[16px] xl:text-[18px] ">
              Password Baru
            </label>
            <div className="w-full border nunito mt-2 ">
              <input
                className="w-full md:px-4 md:py-3 px-2 py-2 text-[13px]  md:text-[15px]"
                type="password"
                placeholder="Masukkan Password Baru"
                onChange={handleEdit}
                value={change.newPassword}
                required
                name="newPassword"
              />
            </div>
            <div className="w-full flex justify-end gap-3">
              <button
                className="bg-[rgb(16,185,129)] 2xl:py-3 2xl:px-14 xl:py-3 xl:px-9 px-5 py-2 md:px-7  text-[14px] rounded-xl mt-5 nunito text-white  "
                type="submit"
              >
                Simpan
              </button>
              <button
                onClick={muncul}
                className=" bg-red-500 2xl:py-3 2xl:px-14 xl:py-3 xl:px-9  px-5 py-2 md:px-7  text-[14px] rounded-xl mt-5 nunito text-white  "
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
