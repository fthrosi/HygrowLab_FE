import { Link } from "react-router-dom";

export default function Beranda() {
  return (
    <div className="px-[18.75rem] py-[5.938rem]">
      <div className="flex justify-between gap-[1.813rem] mt-[5.875rem]">
        <div className="flex flex-col gap-8">
          <h1 className="text-[3.563rem] font-bold font-nunito">
            Nutrisi Tepat, Panen Maksimal
          </h1>
          <p className="text-[1.375rem] font-nunito font-semibold text-[#B0B0B0]">
            Dapatkan komposisi nutrisi yang sesuai untuk tanaman <br />{" "}
            hidroponik dengan <span className="text-primary">Hygrowlab</span>
          </p>
          <div>
            <Link className="bg-primary text-white px-[1.875rem] py-5 rounded-full text-lg font-medium">
              Hitung Nutrisi
            </Link>
          </div>
        </div>
        <div>
          <img src="/assets/images/asset1.png" alt="asset" />
        </div>
      </div>
      <div className="mt-[10.813rem]">
        <div className="justify-center items-center flex flex-col gap-3">
          <h1 className="font-nunito font-extrabold text-4xl">
            Jelajahi <span className="text-primary">HygrowLab</span>
          </h1>
          <p className="text-center font-nunito font-medium text-[1.375rem] text-[#B0B0B0]">
            Mulai perjalanan Anda dengan kalkulator nutrisi <br /> hidroponik
            dan tips perawatan terbaik di HygrowLab.
          </p>
        </div>
        <div className="flex flex-col mt-10 gap-[5rem]">
          <div className="flex gap-[6.375rem] px-10">
            <img src="/assets/images/asset2.png" alt="asset2" />
            <div className="flex flex-col justify-center gap-[1.375rem]">
              <h1 className="font-nunito font-bold text-[1.75rem]">
                Kalkulasi Nutrisi
              </h1>
              <p className="font-nunito font-medium text-lg text-[#A6A6A6]">
                Kalkulasi Nutrisi dirancang untuk membantu petani mengoptimalkan
                pertumbuhan tanaman hidroponik dengan nutrisi yang tepat dan
                terukur. Cukup input data tanaman dan volume air, lalu dapatkan
                rekomendasi nutrisi yang sesuai untuk mendukung pertumbuhan
                optimal di setiap tahap pertumbuhan tanaman. Jadikan proses
                perawatan tanaman lebih praktis dan efektif!
              </p>
            </div>
          </div>
          <div className="flex gap-[6.375rem] px-10">
            <div className="flex flex-col justify-center gap-[1.375rem]">
              <h1 className="font-nunito font-bold text-[1.75rem]">
                Riwayat Pencatatan
              </h1>
              <p className="font-nunito font-medium text-lg text-[#A6A6A6]">
                Pencatatan Tanaman memudahkan petani untuk <br />
                melacak pemberian nutrisi dan perkembangan <br /> setiap
                tanaman. Simpan riwayat perawatan, pantau <br /> jadwal
                pemupukan, dan pastikan tanaman <br /> hidroponik selalu dalam
                kondisi terbaik untuk hasil <br /> yang maksimal!
              </p>
            </div>
            <img src="/assets/images/asset3.png" alt="asset3" />
          </div>
        </div>
      </div>
      <div className="mt-[5rem] py-14 flex gap-[3.75rem]">
        <img src="/assets/images/asset4.png" alt="asset4" className="w-[38.563rem] h-[28.188rem]"/>
        <div className="flex flex-col justify-center gap-[1.813rem]">
          <h1 className="font-nunito font-extrabold text-4xl">
            Kenali <span className="text-primary">Hygrowlab</span>
          </h1>
          <p className="font-nunito font-medium text-lg">
            HygrowLab adalah platform inovatif yang dirancang untuk mempermudah
            pengelolaan pertanian hidroponik. Berlokasi di Batam, kami
            menyediakan fitur kalkulator nutrisi yang membantu menghitung
            kebutuhan nutrisi tanaman, serta fitur pencatatan histori nutrisi
            untuk memantau perkembangan tanaman.
          </p>
          <div className="mt-3">
            <Link to="tentangkami" className="bg-primary text-white px-[1.875rem] py-5 rounded-full text-lg font-medium">
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
