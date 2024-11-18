export default function Dasboard() {
  return (
    <div className="w-full h-screen py-9 overflow-hidden flex flex-col gap-9">
      <div className="flex gap-3">
        <div className="flex items-center w-[25%] justify-between p-5 bg-white rounded-md gap-5">
          <div>
            <p className="text-[21px] font-extrabold nunito">5</p>
            <p className="text-[21px] font-medium text-[rgb(3,2,41)] nunito ">
              Jumlah Tanaman
            </p>
          </div>
          <img
            className="size-20"
            src="/assets/icons/Icon.png"
            alt=""
          />
        </div>
        <div className="flex items-center w-[25%] justify-between p-5 bg-white rounded-md gap-5">
          <div>
            <p className="text-[21px] font-extrabold nunito">5</p>
            <p className="text-[21px] font-medium text-[rgb(3,2,41)] nunito ">
              Jumlah Tanaman
            </p>
          </div>
          <img
            className="size-20"
            src="/assets/icons/Icon.png"
            alt=""
          />
        </div>
        <div className="flex items-center w-[25%] justify-between p-5 bg-white rounded-md gap-5">
          <div>
            <p className="text-[21px] font-extrabold nunito">5</p>
            <p className="text-[21px] font-medium text-[rgb(3,2,41)] nunito ">
              Jumlah Tanaman
            </p>
          </div>
          <img
            className="size-20"
            src="/assets/icons/Icon.png"
            alt=""
          />
        </div>
        <div className="flex items-center w-[25%] justify-between p-5 bg-white rounded-md gap-5">
          <div>
            <p className="text-[21px] font-extrabold nunito">5</p>
            <p className="text-[21px] font-medium text-[rgb(3,2,41)] nunito ">
              Jumlah Tanaman
            </p>
          </div>
          <img
            className="size-20"
            src="/assets/icons/Icon.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-full h-[50%] flex gap-5">
        <div className="w-[70%] bg-white rounded-md">
          <div className="p-5">
            <h1 className="nunito text-[23px] font-bold">
              Data Pencatatan Terbaru
            </h1>
            <table class="table-auto nunito w-full text-start mt-3">
              <thead className="border-b-2 border-gray-300">
                <tr>
                  <th className="text-start py-2">Nama Tanaman</th>
                  <th className="text-start py-2">Jenis Tanaman</th>
                  <th className="text-start py-2">Tanggal Mulai</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-gray-300">
                  <td className="py-2">Bayam Kolam 1</td>
                  <td className="py-2">Sawi Kolam 2</td>
                  <td className="py-2">Kangkung kolam 3</td>
                </tr>
                <tr className="border-b-2 border-gray-300">
                  <td className="py-2">Bayam</td>
                  <td className="py-2">Sawi</td>
                  <td className="py-2">Kangkung</td>
                </tr>
                <tr className="border-b-2 border-gray-300">
                  <td className="py-2">03-09-2024</td>
                  <td className="py-2">03-09-2024</td>
                  <td className="py-2">03-09-2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white w-[35%] rounded-md">
          <div className="p-5">
            <h1 className="nunito text-[23px] font-bold">Data Tanaman</h1>
            <p className="nunito font-bold mt-6">Tanaman</p>
            <hr className="w-[50%] mt-3 border border-gray-300 text-[16px]" />
            <ol className="nunito ">
              <li className="mb-3 mt-2">1. Bayam</li>
              <li className="mb-3">2. Kangkung</li>
              <li className="mb-3">3. Sawi</li>
              <li className="mb-3">4. Pakcoy</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
