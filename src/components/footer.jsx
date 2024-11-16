import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-primary flex justify-between">
      <div className="w-1/3">
        <img
          src="/assets/icons/kiri.png"
          alt=""
          className="h-full"
        />
      </div>
      <div className="flex flex-col lg:gap-10 md:gap-5 gap-5 lg:py-[2.938rem] md:py-[2rem] py-[1rem] w-1/3">
        <div className="flex items-center justify-center gap-4">
          <img
            src="/assets/images/logo-white.png"
            alt="logo"
            className="lg:size-[4rem] md:size-[3rem] size-[clamp(2.5rem,12.5vw,3rem)]"
          />
          <h1 className="font-nunito font-bold md:text-[1.563rem] text-[clamp(1.2rem,6vw,1.5rem)] text-white">
            HygrowLab
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex lg:gap-4 md:gap-4 gap-2 md:text-[clamp(0.9rem,1.875vw,1rem)] text-[clamp(0.7rem,3.5vw,1rem)] lg:text-[1.3rem] font-nunito text-white">
            <li>
              <Link>Beranda</Link>
            </li>
            <li>
              <Link>Tentang Kami</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="size-[clamp(2rem,10vw,2.9rem)] bg-white rounded-full flex items-center justify-center">
            <img
              src="/assets/icons/instagram-brands-solid 1.png"
              alt="facebook"
            />
          </div>
          <div className="size-[clamp(2rem,10vw,2.9rem)] bg-white rounded-full flex items-center justify-center">
            <img src="/assets/icons/fb.png" alt="facebook" />
          </div>
          <div className="size-[clamp(2rem,10vw,2.9rem)] bg-white rounded-full flex items-center justify-center">
            <img src="/assets/icons/x.png" alt="facebook" />
          </div>
        </div>
        <hr />
        <div>
          <p className="text-white text-center font-nunito md:text-[0.875rem] text-[clamp(0.5rem,2.5vw,0.6rem)]">
            © 2024 HygrowLab. All rights reserved.
          </p>
        </div>
      </div>
      <div className="w-1/3">
        <img
          src="/assets/icons/kanan.png"
          alt=""
          className="h-full"
        />
      </div>
    </div>
  );
}
