import { useState } from "react";

export default function Faqs() {
  const [rotatedIndex, setRotatedIndex] = useState(null); // Menyimpan indeks yang sedang diputar
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null); // Menyimpan indeks jawaban yang sedang terlihat

  const faqs = [
    {
      question: "Apa itu Hidroponik?",
      answer:
        "Hidroponik adalah metode bercocok tanam yang menggunakan air sebagai media tanam pengganti tanah. Tanaman ditanam dengan akar yang terendam dalam larutan air yang mengandung nutrisi yang diperlukan untuk pertumbuhan tanaman. Sistem ini memungkinkan tanaman untuk tumbuh dengan lebih efisien karena nutrisi langsung disalurkan ke akar, dan sering digunakan di tempat dengan ruang terbatas atau di area yang memiliki tanah yang tidak subur. Beberapa keuntungan hidroponik adalah penggunaan air yang lebih hemat, kontrol yang lebih baik terhadap nutrisi, dan potensi hasil yang lebih tinggi dalam waktu yang lebih singkat.",
    },
    {
      question: "Apa saja jenis hidroponik?",
      answer:
        "Beberapa jenis hidroponik antara lain sistem wick, deep water culture (DWC), dan NFT (Nutrient Film Technique).",
    },
    {
      question: "Apa saja keuntungan hidroponik?",
      answer:
        "Keuntungan hidroponik termasuk penggunaan air yang efisien, ruang yang lebih kecil, dan hasil tanaman yang lebih cepat.",
    },
  ];

  const toggleRotation = (index) => {
    // Menentukan apakah jawaban sudah dibuka sebelumnya
    const isAnswerVisible = visibleAnswerIndex === index;

    // Jika jawaban sudah dibuka, reset rotasi, jika tidak, buka jawaban baru
    setVisibleAnswerIndex(isAnswerVisible ? null : index);

    // Atur rotasi hanya untuk jawaban yang sedang dibuka
    setRotatedIndex(isAnswerVisible ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen xl:px-[clamp(15rem,18.75vw,18.75rem)] xl:py-[5.938rem] py-[clamp(5rem,25vw,6rem)] px-[clamp(1rem,5vw,2.5rem)] md:px-10 md:py-15 items-center xl:gap-[8.625rem] gap-[3rem]">
      <h1 className="font-nunito font-bold xl:text-[2rem] text-[clamp(1.5rem,7.5vw,2.5rem)] text-center lg:text-[1.75rem] md:text-[3.125vw]">
        Frequently Asked Question
      </h1>
      <div className="flex flex-col gap-[1.875rem] md:w-[80%] xl:w-[80%]">
        {faqs.map((faq, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex justify-between shadow-md rounded-md xl:py-[3.188rem] xl:px-[2.438rem] py-[1.5rem] px-[2rem] items-center">
              <h1 className="font-nunito font-bold text-[clamp(1rem,5vw,1.5rem)] w-[70%] lg:text-[1.375rem] md:text-[2.08vw]">
                {faq.question}
              </h1>
              <div
                onClick={() => toggleRotation(index)} // Menambahkan event handler untuk klik berdasarkan indeks
                className="shadow-md rounded-full xl:size-[3.188rem] size-9 flex justify-center items-center cursor-pointer"
              >
                <img
                  src="/assets/icons/panah.png"
                  alt="panah"
                  className={`transition-transform duration-300 ${
                    rotatedIndex === index ? "rotate-90" : ""
                  }`} // Rotasi hanya pada gambar yang sesuai indeks
                />
              </div>
            </div>

            {/* Menampilkan jawaban dengan efek translateY */}
            {visibleAnswerIndex === index && (
              <div
                className="transition-all duration-500 ease-in-out transform translate-y-0 opacity-100 overflow-hidden bg-white shadow-md rounded-b-md px-4 py-3"
              >
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
