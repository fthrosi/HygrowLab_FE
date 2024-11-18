export default function TentangKami() {
  const team = [
    {
      name: "Andryansah",
      role: "Project Manager",
      image: "/assets/images/Pio.jpg",
      word: "ketika kamu berhenti berharap, kamu berhenti",
    },
    {
      name: "Rahmat Farras",
      role: "Scrumb Master",
      image: "/assets/images/Pio.jpg",
      word: "siapa yang takut gagal, dia tidak akan berhasil",
    },
    {
      name: "Dhea Marezka",
      role: "Hipster",
      image: "/assets/images/Pio.jpg",
      word: "jangan pernah menyerah, karena menyerah adalah awal dari kegagalan",
    },
    {
      name: "Suci",
      role: "Hipster",
      image: "/assets/images/Pio.jpg",
      word: "kamu tidak akan pernah tahu seberapa kuat kamu",
    },
    {
      name: "Fathur Rosi",
      role: "Hacker",
      image: "/assets/images/Pio.jpg",
      word: "Babam Babam, Yuhuuuu",
    },
    {
      name: "Joan Carolus",
      role: "Hacker",
      image: "/assets/images/Pio.jpg",
      word: "Faras, kamu harus bisa",
    },
  ];
  return (
    <div className="xl:px-[clamp(15rem,18.75vw,18.75rem)] xl:py-[5.938rem] py-[clamp(5rem,25vw,6rem)] px-[clamp(1rem,5vw,2.5rem)] md:px-10 md:py-10">
      <div
        className="flex xl:mt-[5.875rem] rounded-[1.25rem] bg-cover bg-center xl:h-[34.25rem] h-[50vw] justify-end items-center p-2 md:mt-[5rem]"
        style={{ backgroundImage: "url('/assets/images/tentangtumbuhan.png')" }}
      >
        <h1 className="text-end xl:pr-7 font-nunito font-bold xl:text-[3.563rem] text-white xl:leading-[4rem] w-[clamp(10rem,50vw,20rem)] text-[clamp(0.8rem,4vw,1.6rem)] md:text-[clamp(2rem,4.1vw,2.8rem)] md:leading-[3rem] md:w-[60%]">
          Mengoptimalkan pertumbuhan tanaman hidroponik dengan
          nutrisi yang tepat dan terukur
        </h1>
      </div>
      <div className="grid xl:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-10 xl:mt-[7.563rem] mt-[3rem]">
        <div className="flex flex-col xl:gap-[clamp(0.5rem,0.625vw,1.25rem)] gap-[clamp(0.5rem,2.5vw,1.5rem)] order-2 md:order-1 items-center md:justify-center">
          <div className="flex gap-[clamp(0.5rem,2.5vw,1.5rem)] xl:gap-[clamp(0.5rem,0.625vw,1.25rem)]">
            <div className="xl:w-[clamp(11.5rem,14.3vw,17rem)] xl:h-[clamp(10rem,12.5vw,14.875rem)] size-[clamp(8rem,40vw,16rem)] md:size-[clamp(10rem,20.8vw,13rem)]">
              <img
                src="/assets/images/tanaman.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="xl:w-[clamp(11.5rem,14.3vw,17rem)] xl:h-[clamp(10rem,12.5vw,14.875rem)] size-[clamp(8rem,40vw,16rem)] md:size-[clamp(10rem,20.8vw,13rem)]">
              <img
                src="/assets/images/tanaman.png"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex xl:gap-[clamp(0.5rem,0.625vw,1.25rem)] gap-[clamp(0.5rem,2.5vw,1.5rem)]">
            <div className="xl:w-[clamp(11.5rem,14.3vw,17rem)] xl:h-[clamp(10rem,12.5vw,14.875rem)] size-[clamp(8rem,40vw,16rem)] md:size-[clamp(10rem,20.8vw,13rem)]">
              <img
                src="/assets/images/tanaman.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="xl:w-[clamp(11.5rem,14.3vw,17rem)] xl:h-[clamp(10rem,12.5vw,14.875rem)] size-[clamp(8rem,40vw,16rem)] md:size-[clamp(10rem,20.8vw,13rem)]">
              <img
                src="/assets/images/tanaman.png"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:gap-[1.813rem] gap-2 md:order-2">
          <h1 className="font-nunito font-extrabold text-primary xl:text-[2rem] lg:text-4xl md:text-[3.125vw] text-[clamp(1.5rem,7.5vw,2.5rem)]">
            HygrowLab
          </h1>
          <p className="font-nunito font-medium xl:text-lg text-[clamp(1rem,5vw,1.5rem)] lg:text-[1.375rem] md:text-[2.08vw]">
            Kami menyadari bahwa banyak petani hidroponik mengalami kesulitan
            dalam menghitung nutrisi yang tepat. Berdasarkan hal tersebut, kami
            membuat website sederhana yang memungkinkan siapa saja bisa
            menghitung dan mengelola nutrisi tanaman dengan lebih mudah dan
            akurat
          </p>
          <p className="font-nunito font-medium xl:text-lg text-[clamp(1rem,5vw,1.5rem)] lg:text-[1.375rem] md:text-[2.08vw]">
            <span className="font-bold">HygrowLab</span> adalah platform
            inovatif yang dirancang untuk mempermudah pengelolaan pertanian
            hidroponik. Berlokasi di Batam, kami menyediakan fitur kalkulator
            nutrisi yang membantu menghitung kebutuhan nutrisi tanaman, serta
            fitur pencatatan histori nutrisi untuk memantau perkembangan
            tanaman.
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:mt-[8.5rem] mt-[4rem] justify-center items-center">
        <h1 className="font-nunito font-extrabold text-4xl md:text-[clamp(2rem,4.16vw,2.5rem)]">Tim Kami</h1>
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {team.map((member) => (
            <div className="flex flex-col gap-2 items-start shadow-md rounded-md p-2">
              <img src={member.image} alt="" className="rounded-sm h-2/3 w-full" />
              <h1 className="font-nunito font-bold text-[clamp(1.25rem,6.25vw,2rem)] sm:text-[1.4rem] md:text-[clamp(1.5rem,3vw,2rem)] lg:text-[1.5rem]">{member.name} - {member.role}</h1>
              <p className="font-nunito font-medium text-[clamp(1.125rem,5.625vw,1.5rem)] sm:text-[1rem] text-start md:text-[clamp(1rem,2vw,1.5rem)] lg:text-[1.3rem]">
                {member.word}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
