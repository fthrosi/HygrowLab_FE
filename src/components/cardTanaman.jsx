import { useState, useEffect, useRef } from "react";
export default function CardTanaman({ handleClick, item, onDelete }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown((prev) => !prev);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(item.plant_id);
    setShowDropdown(false);
  };
  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };
  function capitalizeWords(string) {
    return string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showDropdown]);
  return (
    <div
      key={item.plant_name}
      className="pb-6 h-[81.2vw] w-[80%] max-h-[20rem] max-w-[20rem] sm:h-[40.6vw] sm:max-h-[35rem] sm:max-w-[35rem] sm:w-[90%] md:max-w-[30rem] md:w-[90%] md:h-[35.3vw] md:max-h-[20rem] shadow-2xl rounded-md relative"
    >
      <div className="h-[60%]" onClick={handleClick}>
        <div
          className="h-full bg-cover p-1 overflow-hidden rounded-t-md drop-shadow-sm"
          style={{
            backgroundImage: item.foto
              ? `url(${import.meta.env.VITE_BACKEND_PUBLIC_API_URL}/${item.foto})`
              : `url(/assets/images/belumadafoto.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-end relative">
            <div
              className="w-[26px] h-[26px] rounded-full bg-off-white flex justify-center items-center hover:cursor-pointer z-30"
              onClick={toggleDropdown}
            >
              <img src="assets/icons/Group.png" alt="icon" />
            </div>
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute right-0 top-full mt-1 w-40 bg-white border rounded-lg shadow-lg z-50 hover:bg-red-50"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="px-4 py-2 text-red-600 cursor-pointer flex justify-center"
                  onClick={handleDeleteClick}
                >
                  Hapus Tanaman
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="px-3 mt-3">
          <h1 className="text-primary text-[clamp(1rem,5vw,1.5rem)]">
            {item.plant_list_name}
          </h1>
        </div>
        <div className="px-3 mt-1.5">
          <h1 className="font-semibold text-[clamp(1.15rem,5.75vw,1.6rem)]">
            {capitalizeWords(item.plant_name)}
          </h1>
        </div>
        <div className="px-3 mt-1.5">
          <h1 className="text-[clamp(0.75rem,3.75vw,1rem)]">
            {item.tanggal_tanam}
          </h1>
        </div>
      </div>
    </div>
  );
}
