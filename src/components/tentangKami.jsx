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
      word: "siapa yang tidak berani gagal, dia tidak akan pernah berhasil",
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
      word: "kamu tidak akan pernah tahu seberapa kuat kamu, sampai kamu harus menjadi kuat",
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
    <div className="px-[18.75rem] pt-[5.938rem] pb-[11.813rem]">
      <div
        className="flex mt-[5.875rem] rounded-[1.25rem] bg-cover bg-center h-[34.25rem] justify-end items-center"
        style={{ backgroundImage: "url('/assets/images/tentangtumbuhan.png')" }}
      >
        <h1 className="text-end pr-7 font-nunito font-bold text-[3.563rem] text-white leading-[4rem]">
          Mengoptimalkan <br /> pertumbuhan tanaman <br /> hidroponik dengan
          nutrisi <br /> yang tepat dan terukur
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-[7.563rem]">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="w-[17rem] h-[14.875rem]">
              <img
                src="/assets/images/tanaman.png"
                alt=""
                className="w-full h-full"
              />
            </div>

            <div className="w-[17rem] h-[14.875rem]">
              <img
                src="/assets/images/tanaman.png"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-[17rem] h-[14.875rem]">
              <img
                src="/assets/images/tanaman.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="w-[17rem] h-[14.875rem]">
              <img
                src="/assets/images/tanaman.png"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[1.813rem]">
          <h1 className="font-nunito font-extrabold text-primary text-[2rem]">
            HygrowLab
          </h1>
          <p className="font-nunito font-medium text-lg">
            Kami menyadari bahwa banyak petani hidroponik mengalami kesulitan
            dalam menghitung nutrisi yang tepat. Berdasarkan hal tersebut, kami
            membuat website sederhana yang memungkinkan siapa saja bisa
            menghitung dan mengelola nutrisi tanaman dengan lebih mudah dan
            akurat
          </p>
          <p className="font-nunito font-medium text-lg">
            <span className="font-bold">HygrowLab</span> adalah platform
            inovatif yang dirancang untuk mempermudah pengelolaan pertanian
            hidroponik. Berlokasi di Batam, kami menyediakan fitur kalkulator
            nutrisi yang membantu menghitung kebutuhan nutrisi tanaman, serta
            fitur pencatatan histori nutrisi untuk memantau perkembangan
            tanaman.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-[8.5rem] justify-center items-center">
        <h1 className="font-nunito font-extrabold text-4xl">Tim Kami</h1>
        <div className="grid grid-cols-3 gap-5 mt-10">
          {team.map((member) => (
            <div className="flex flex-col gap-2 items-start shadow-md rounded-md p-2">
              <img src={member.image} alt="" className="rounded-sm" />
              <h1 className="font-nunito font-bold text-xl">{member.name} - {member.role}</h1>
              <p className="font-nunito font-medium text-lg text-start">
                {member.word}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
