export default function Sidebar() {
  return (
    <div className="w-[365px] min-h-screen gap-4 shrink-0 flex flex-col pt-10 px-10">
      {/* Logo dan Title */}
      <div className="flex gap-5 items-center justify-start">
        <img className="size-[3.313rem]" src="/assets/images/logo.png" alt="" />
        <h1 className="nunito font-bold text-[25px]">HygrowLab</h1>
      </div>
      {/* Dashboard Menu */}
      <div className="flex w-full gap-5 items-center hover:cursor-pointer justify-start mt-[2.5rem]">
        <img
          className="w-[20px] h-[20px]"
          src="assets/images/Home.png"
          alt=""
        />
        <a href="/home" className="text-[rgb(16,185,129)] text-[21px] nunito font-bold">
          Dashboard
        </a>
      </div>

      {/* Tanaman Saya Menu */}
      <div className="flex w-full gap-5 justify-start items-center hover:cursor-pointer">
        <img
          className="w-[20px] h-[20px]"
          src="assets/images/leaf.png"
          alt=""
        />
        <a href="/tanaman" className="text-[rgb(124,124,124)] hover:text-[rgb(16,185,129)] text-[21px] nunito font-bold">
          Tanaman Saya
        </a>
      </div>

      {/* Kalkulasi Nutrisi Menu */}
      <div className="flex w-full gap-5 items-center relative hover:cursor-pointer">
        <img
          className="w-[20px] h-[20px]"
          src="assets/images/kalkulator.png"
          alt=""
        />
        <a href="/nutrisi" className="text-[rgb(124,124,124)] hover:text-[rgb(16,185,129)] text-[21px] nunito font-bold">
          Kalkulasi Nutrisi
        </a>
      </div>
    </div>
  );
}
