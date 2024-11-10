import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-primary flex justify-between">
      <div className="">
        <img
          src="/assets/icons/kiri.png"
          alt=""
          className="h-full"
        />
      </div>
      <div className="flex flex-col lg:gap-10 md:gap-5 gap-5 lg:py-[2.938rem] md:py-[2rem] py-[1rem]">
        <div className="flex items-center justify-center gap-4">
          <img
            src="/assets/images/logo-white.png"
            alt="logo"
            className="lg:size-[4rem] md:size-[6.25vw] size-[12.5vw]"
          />
          <h1 className="font-nunito font-bold md:text-[1.563rem] text-[6vw] text-white">
            HygrowLab
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex lg:gap-7 md:gap-5 gap-3 md:text-lg text-[3.5vw] md:text-[1rem] font-nunito text-white">
            <li>
              <Link>Beranda</Link>
            </li>
            <li>
              <Link>Tentang Kami</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="md:w-10 md:h-10 size-[10vw] bg-white rounded-full flex items-center justify-center">
            <img
              src="/assets/icons/instagram-brands-solid 1.png"
              alt="facebook"
            />
          </div>
          <div className="md:w-10 md:h-10 size-[10vw] bg-white rounded-full flex items-center justify-center">
            <img src="/assets/icons/fb.png" alt="facebook" />
          </div>
          <div className="md:w-10 md:h-10 size-[10vw] bg-white rounded-full flex items-center justify-center">
            <img src="/assets/icons/x.png" alt="facebook" />
          </div>
        </div>
        <hr />
        <div>
          <p className="text-white text-center font-nunito md:text-[0.875rem] text-[2.5vw]">
            © 2024 HygrowLab. All rights reserved.
          </p>
        </div>
      </div>
      <div>
        <img
          src="/assets/icons/kanan.png"
          alt=""
          className="h-full"
        />
      </div>
    </div>
  );
}
