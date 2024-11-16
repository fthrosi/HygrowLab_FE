import { Link } from "react-router-dom";

export default function Beranda() {
  return (
    <div className="xl:px-[clamp(15rem,18.75vw,18.75rem)] xl:py-[5.938rem] py-[clamp(5rem,25vw,6rem)] px-[clamp(1rem,5vw,2.5rem)] md:px-10 md:py-10">
      <div className="flex flex-col md:flex-row items-center justify-between xl:gap-[9rem] xl:mt-[2rem] md:mt-[5.875rem] md:gap-[1rem] gap-3">
        <div className="flex flex-col gap-3 xl:gap-8 md:gap-4 lg:w-1/2">
          <h1 className="lg:text-[clamp(3.5rem,5.46vw,4rem)] xl:text-[clamp(3rem,3.75vw,3.5rem)] md:text-[5.21vw] text-[clamp(1.8rem,9vw,3rem)] font-bold font-nunito">
            Nutrisi Tepat, Panen Maksimal
          </h1>
          <p className="xl:text-[1.375rem] lg:text-[clamp(1.3rem,2vw,1.5rem)] md:text-[2.08vw] text-[clamp(1rem,5vw,1.4rem)] font-nunito font-semibold text-[#B0B0B0] w-[clamp(16rem,80vw,28rem)] md:w-[clamp(20rem,41.6vw,25rem)]">
            Dapatkan komposisi nutrisi yang sesuai untuk tanaman hidroponik
            dengan <span className="text-primary">Hygrowlab</span>
          </p>
          <div className="md:mt-2 mt-2">
            <Link className="bg-primary text-white lg:text-[1rem] xl:px-[1.875rem] xl:py-5 px-[0.5rem] py-[0.5rem] md:px-[0.8rem] md:py-[0.8rem] rounded-full xl:text-lg font-medium text-[clamp(0.8rem,4vw,1.1rem)] md:text-[2.08vw]">
              Hitung Nutrisi
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src="/assets/images/asset1.png" alt="asset" />
        </div>
      </div>
      <div className="lg:mt-[10.813rem] mt-[5rem] md:px-[2rem]">
        <div className="justify-center items-center flex flex-col gap-3">
          <h1 className="font-nunito lg:font-extrabold lg:text-4xl md:text-[clamp(2rem,4.16vw,2.5rem)] md:font-bold text-[clamp(1.5rem,7.5vw,2.5rem)] font-bold">
            Jelajahi <span className="text-primary">HygrowLab</span>
          </h1>
          <p className="text-center font-nunito font-medium text-[clamp(1rem,5vw,1.3rem)] lg:text-[1.375rem] md:text-[clamp(1.3rem,2.7vw,1.5rem)] text-[#B0B0B0] w-[clamp(16rem,80vw,26rem)] md:w-[clamp(26rem,54.16vw,30rem)]">
            Mulai perjalanan Anda dengan kalkulator nutrisi hidroponik dan tips
            perawatan terbaik di HygrowLab.
          </p>
        </div>
        <div className="flex flex-col mt-10 md:gap-[2.5rem] gap-[2rem]">
          <div className="flex flex-col md:flex-row lg:gap-[3rem] md:gap-6 gap-[1.5rem] items-center">
            <div className="md:w-[50%]">
              <img
                src="/assets/images/asset2.png"
                alt="asset2"
                className="md:w-full md:h-auto xl:w-[26.5rem] xl:h-[26.875rem] size-[clamp(17rem,85vw,25rem)] sm:size-[clamp(25rem,62.5vw,35rem)]"
              />
            </div>
            <div className="flex flex-col justify-center lg:gap-[1.375rem] md:gap-2 gap-4 md:w-[50%]">
              <h1 className="font-nunito font-bold lg:text-4xl md:text-[3.125vw] text-[clamp(1.5rem,7.5vw,2.5rem)]  md:text-start">
                Kalkulasi Nutrisi
              </h1>
              <p className="font-nunito font-medium lg:text-[1.375rem] md:text-[2.08vw] text-[#A6A6A6] text-justify xl:text-start text-[clamp(1rem,5vw,1.5rem)]">
                Kalkulasi Nutrisi dirancang untuk membantu petani mengoptimalkan
                pertumbuhan tanaman hidroponik dengan nutrisi yang tepat dan
                terukur. Cukup input data tanaman dan volume air, lalu dapatkan
                rekomendasi nutrisi yang sesuai untuk mendukung pertumbuhan
                optimal di setiap tahap pertumbuhan tanaman. Jadikan proses
                perawatan tanaman lebih praktis dan efektif!
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:gap-[3rem] gap-[1.5rem] md:gap-6  lg:px-10 items-center">
            <div className="flex flex-col  justify-center lg:gap-[1.375rem] gap-4 md:gap-2 order-2 md:order-1 md:w-[50%]">
              <h1 className="font-nunito font-bold lg:text-[1.75rem] md:text-[3.125vw] text-[clamp(1.5rem,7.5vw,2.5rem)] md:text-start">
                Riwayat Pencatatan
              </h1>
              <p className="font-nunito font-medium lg:text-[1.375rem] md:text-[2.08vw] text-[#A6A6A6] text-justify text-[clamp(1rem,5vw,1.5rem)] xl:text-start">
                Pencatatan Tanaman memudahkan petani untuk melacak pemberian
                nutrisi dan perkembangan setiap tanaman. Simpan riwayat
                perawatan, pantau jadwal pemupukan, dan pastikan tanaman
                hidroponik selalu dalam kondisi terbaik untuk hasil yang
                maksimal!
              </p>
            </div>
            <div className="md:w-[50%] md:order-2">
              <img
                src="/assets/images/asset3.png"
                alt="asset3"
                className=" md:w-full md:h-auto xl:w-[26.5rem] xl:h-[26.875rem] size-[clamp(17rem,85vw,25rem)] sm:size-[clamp(25rem,62.5vw,35rem)]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:py-14 py-8 flex flex-col md:flex-row lg:gap-[3rem] gap-[1.5rem] md:gap-6  items-center">
        <div className="md:w-1/2">
          <img
            src="/assets/images/asset4.png"
            alt="asset4"
            className="lg:w-[38.563rem] lg:h-[28.188rem] md:w-full md:h-auto size-[clamp(17rem,85vw,25rem)] sm:size-[clamp(25rem,62.5vw,35rem)]"
          />
        </div>

        <div className="flex flex-col justify-center lg:gap-[1.813rem] md:gap-2 gap-[1rem] md:w-1/2">
          <h1 className="font-nunito md:font-extrabold font-bold lg:text-4xl text-[clamp(1.5rem,7.5vw,2.5rem)] xl:text-start md:text-[3.125vw]">
            Kenali <span className="text-primary">HygrowLab</span>
          </h1>
          <p className="font-nunito font-medium lg:text-[1.375rem] md:text-[2.08vw] text-justify xl:text-start text-[clamp(1rem,5vw,1.5rem)] text-[#A6A6A6]">
            <span className="font-bold text-black">HygrowLab</span> adalah
            platform inovatif yang dirancang untuk mempermudah pengelolaan
            pertanian hidroponik. Berlokasi di Batam, kami menyediakan fitur
            kalkulator nutrisi yang membantu menghitung kebutuhan nutrisi
            tanaman, serta fitur pencatatan histori nutrisi untuk memantau
            perkembangan tanaman.
          </p>
          <div className="lg:mt-3 flex xl:justify-start">
            <Link
              to="tentangkami"
              className="bg-primary text-white xl:px-[1.875rem] xl:py-5 px-[0.5rem] py-[0.5rem] md:px-[0.8rem] md:py-[0.8rem] rounded-full xl:text-lg font-medium text-[clamp(0.8rem,4vw,1.1rem)] md:text-[2.08vw]"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
