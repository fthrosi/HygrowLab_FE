import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TambahTanaman, GetTanaman, DeleteTanaman } from '../api/tanaman';
import ModalTambah from './modalTambahTanaman';
import CardTanaman from './cardTanaman';
import { toast } from 'sonner';

export default function Tanaman() {
  const [tanaman, setTanaman] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    jenis_tanaman: '',
    nama_tanaman: '',
    tanggal_tanam: '',
  });

  // Pagination configuration
  const cardsPerPage = 8;
  const totalPages = Math.ceil(tanaman.length / cardsPerPage);

  // Paginate the tanaman data
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return tanaman.slice(startIndex, endIndex);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTambah = async (e) => {
    e.preventDefault();

    try {
      await TambahTanaman(formData);
      setShow(false);
      fetchTanaman();
      toast.success('Berhasil Menambah Tanaman');
    } catch (error) {
      toast.error('Gagal Menambah Tanaman');
    }
  };

  const [show, setShow] = useState(false);
  const tutup = () => {
    setShow(!show);
  };

  const navigate = useNavigate();
  const handleClick = (plant_id) => {
    navigate(`/detailtanaman/${plant_id}`);
  };

  const fetchTanaman = async () => {
    try {
      const data = await GetTanaman();
      setTanaman(data.data);
      // Reset to first page when data is fetched
      setCurrentPage(1);
    } catch (error) {
      console.error('Gagal menampilkan data tanaman', error);
    }
  };

  const handleDelete = async (plant_id) => {
    try {
      await DeleteTanaman(plant_id);
      fetchTanaman();
    } catch (error) {
      console.error('Delete tanaman gagal', error);
    }
  };

  // Pagination handlers
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    fetchTanaman();
  }, []);

  return (
    <div className="md:px-5 pb-5">
      {show && (
        <ModalTambah
          formData={formData}
          handleChange={handleChange}
          handleTambah={handleTambah}
          tutup={tutup}
        />
      )}
      <div className="mt-5 px-2 py-3">
        <div className="flex w-full justify-end px-4">
          <div
            onClick={tutup}
            className="bg-primary 2xl:rounded-xl nunito text-white 2xl:py-3 2xl:px-6 py-1 px-2 rounded-md text-[clamp(0.75rem,3.75vw,1rem)] hover:cursor-pointer">
            + Tambah Tanaman
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-8 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {getPaginatedData().map((item) => (
            <CardTanaman
              key={item.plant_id}
              handleClick={() => handleClick(item.plant_id)}
              item={item}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 space-x-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50 disabled:cursor-not-allowed">
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50 disabled:cursor-not-allowed">
          Next
        </button>
      </div>
    </div>
  );
}
