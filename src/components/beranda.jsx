import { Link } from "react-router-dom";

export default function Beranda() {
  return (
    <div className="xl:px-[18.75rem] xl:py-[5.938rem] py-[25vw] px-[2rem] md:px-10 md:py-10">
      <div className="flex flex-col md:flex-row items-center justify-between xl:gap-[9rem] md:mt-[5.875rem] md:gap-[1rem]">
        <div className="flex flex-col xl:gap-8 md:gap-4">
          <h1 className="xl:text-[3.563rem] lg:text-[6.25vw] md:text-[5.21vw] text-[9vw] font-bold font-nunito">
            Nutrisi Tepat, Panen Maksimal
          </h1>
          <p className="xl:text-[1.375rem] lg:text-[2.86vw] md:text-[2.08vw] text-[5vw] font-nunito font-semibold text-[#B0B0B0]">
            Dapatkan komposisi nutrisi yang sesuai untuk tanaman <br />
            hidroponik dengan <span className="text-primary">Hygrowlab</span>
          </p>
          <div className="md:mt-2 mt-2">
            <Link className="bg-primary text-white xl:px-[1.875rem] xl:py-5 px-[0.5rem] py-[0.5rem] md:px-[0.8rem] md:py-[0.8rem] rounded-full xl:text-lg font-medium text-[4vw] md:text-[2.08vw]">
              Hitung Nutrisi
            </Link>
          </div>
        </div>
        <div>
          <img src="/assets/images/asset1.png" alt="asset" />
        </div>
      </div>
      <div className="lg:mt-[10.813rem] mt-[5rem] md:px-[2rem]">
        <div className="justify-center items-center flex flex-col gap-3">
          <h1 className="font-nunito lg:font-extrabold lg:text-4xl md:text-[3.125vw] md:font-bold text-[7.5vw] font-bold">
            Jelajahi <span className="text-primary">HygrowLab</span>
          </h1>
          <p className="text-center font-nunito font-medium text-[5vw] lg:text-[1.375rem] md:text-[3.125vw] text-[#B0B0B0]">
            Mulai perjalanan Anda dengan kalkulator nutrisi <br />
            hidroponik dan tips perawatan terbaik di HygrowLab.
          </p>
        </div>
        <div className="flex flex-col mt-10 md:gap-[2.5rem] gap-[2rem]">
          <div className="flex flex-col md:flex-row lg:gap-[6.375rem] md:gap-6 gap-[1.5rem] lg:px-10">
            <img
              src="/assets/images/asset2.png"
              alt="asset2"
              className="md:size-[37.5vw] xl:w-[26.5rem] xl:h-[26.875rem]"
            />
            <div className="flex flex-col justify-center lg:gap-[1.375rem] md:gap-2 gap-4">
              <h1 className="font-nunito font-bold lg:text-[1.75rem] md:text-[3.125vw] text-[7.5vw] text-center md:text-start">
                Kalkulasi Nutrisi
              </h1>
              <p className="font-nunito font-medium lg:text-lg md:text-[2.08vw] text-[#A6A6A6] text-center md:text-start text-[5vw]">
                Kalkulasi Nutrisi dirancang untuk membantu petani mengoptimalkan
                pertumbuhan tanaman hidroponik dengan nutrisi yang tepat dan
                terukur. Cukup input data tanaman dan volume air, lalu dapatkan
                rekomendasi nutrisi yang sesuai untuk mendukung pertumbuhan
                optimal di setiap tahap pertumbuhan tanaman. Jadikan proses
                perawatan tanaman lebih praktis dan efektif!
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:gap-[6.375rem] gap-[1.5rem] md:gap-6  lg:px-10">
            <div className="flex flex-col  justify-center md:gap-[1.375rem] gap-4 order-2 md:order-1">
              <h1 className="font-nunito font-bold lg:text-[1.75rem] md:text-[3.125vw] text-[7.5vw] text-center md:text-start">
                Riwayat Pencatatan
              </h1>
              <p className="font-nunito font-medium lg:text-lg md:text-[2.08vw] text-[#A6A6A6] text-center text-[5vw] md:text-start">
                Pencatatan Tanaman memudahkan petani untuk <br />
                melacak pemberian nutrisi dan perkembangan <br />
                setiap tanaman. Simpan riwayat perawatan, pantau <br />
                jadwal pemupukan, dan pastikan tanaman <br />
                hidroponik selalu dalam kondisi terbaik untuk hasil <br />
                yang maksimal!
              </p>
            </div>
            <img
              src="/assets/images/asset3.png"
              alt="asset3"
              className="md:order-2 md:size-[37.5vw] xl:w-[26.5rem] xl:h-[26.875rem]"
            />
          </div>
        </div>
      </div>
      <div className="md:mt-[5rem] md:py-14 py-8 flex flex-col md:flex-row md:gap-[3.75rem] gap-[1.5rem]">
        <img
          src="/assets/images/asset4.png"
          alt="asset4"
          className="lg:w-[38.563rem] lg:h-[28.188rem] md:size-[41.67vw]"
        />
        <div className="flex flex-col justify-center md:gap-[1.813rem] gap-[1rem]">
          <h1 className="font-nunito md:font-extrabold font-bold lg:text-4xl text-[7.5vw] text-center xl:text-start md:text-[3.125vw]">
            Kenali <span className="text-primary">HygrowLab</span>
          </h1>
          <p className="font-nunito font-medium lg:text-lg md:text-[2.08vw] text-center xl:text-start text-[5vw]">
            <span className="font-bold">HygrowLab</span> adalah platform
            inovatif yang dirancang untuk mempermudah pengelolaan pertanian
            hidroponik. Berlokasi di Batam, kami menyediakan fitur kalkulator
            nutrisi yang membantu menghitung kebutuhan nutrisi tanaman, serta
            fitur pencatatan histori nutrisi untuk memantau perkembangan
            tanaman.
          </p>
          <div className="lg:mt-3 flex justify-center xl:justify-start">
            <Link
              to="tentangkami"
              className="bg-primary text-white lg:px-[1.875rem] lg:py-5 md:px-[1rem] md:py-[0.8rem] px-[0.5rem] py-[0.5rem] rounded-full md:text-lg font-medium text-[4.375vw]"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
