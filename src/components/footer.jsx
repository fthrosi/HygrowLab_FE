import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-primary flex justify-between">
      <div className="">
        <img
          src="/assets/icons/kiri.png"
          alt=""
          className="h-full w-[37.063rem]"
        />
      </div>
      <div className="flex flex-col gap-10 py-[2.938rem]">
        <div className="flex items-center justify-center gap-4">
          <img
            src="/assets/images/logo-white.png"
            alt="logo"
            style={{ width: 64, height: 65 }}
          />
          <h1 className="font-nunito font-bold text-[1.563rem] text-white">
            HygrowLab
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex gap-7 text-lg font-nunito text-white">
            <li>
              <Link>Beranda</Link>
            </li>
            <li>
              <Link>Tentang Kami</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img
              src="/assets/icons/instagram-brands-solid 1.png"
              alt="facebook"
            />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img src="/assets/icons/fb.png" alt="facebook" />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img src="/assets/icons/x.png" alt="facebook" />
          </div>
        </div>
        <hr />
        <div>
          <p className="text-white text-center font-nunito text-[0.875rem]">
            © 2024 HygrowLab. All rights reserved.
          </p>
        </div>
      </div>
      <div>
        <img
          src="/assets/icons/kanan.png"
          alt=""
          className="h-full w-[37.063rem]"
        />
      </div>
    </div>
  );
}
