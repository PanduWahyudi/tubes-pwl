import { useState } from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import { Pagination } from "flowbite-react";
import SearchBar from "../components/Elements/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import EditButton from "../components/Elements/EditButton";
import DeleteButton from "../components/Elements/DeleteButton";
import ConfirmationPopUP from "../components/Fragments/ConfirmationPopUp";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";
import { axiosInstance } from "../utils/AxiosInstance";
import useSWR, { mutate } from "swr";

function ExitItemPages() {
  const dummy = [
    {
      id: 1,
      produk: "Televisi",
      waktu: "25/11/2023",
      idSupplier: "SP001",
      qty: 100,
    },
    {
      id: 2,
      produk: "Televisi 1",
      waktu: "25/11/2023",
      idSupplier: "SP001",
      qty: 100,
    },
    {
      id: 3,
      produk: "Televisi 2",
      waktu: "25/11/2023",
      idSupplier: "SP001",
      qty: 100,
    },
    {
      id: 4,
      produk: "Televisi 3",
      waktu: "25/11/2023",
      idSupplier: "SP001",
      qty: 100,
    },
    {
      id: 5,
      produk: "Televisi 4",
      waktu: "25/11/2023",
      idSupplier: "SP001",
      qty: 100,
    },
    {
      id: 6,
      produk: "Televisi 5",
      waktu: "25/11/2023",
      idSupplier: "SP001",
      qty: 100,
    },
    {
      id: 7,
      produk: "Televisi 6",
      waktu: "25/11/2023",
      idSupplier: "SP001",
      qty: 100,
    },
    {
      id: 8,
      produk: "Televisi 7",
      waktu: "25/11/2023",
      idSupplier: "SP001",
      qty: 100,
    },
    {
      id: 9,
      produk: "Televisi 8",
      waktu: "25/11/2023",
      idSupplier: "SP001",
      qty: 110,
    },
  ];

  let dataKeluar = [];
  const [targetId, setTargetId] = useState();
  const navigate = useNavigate();

  const { data } = useSWR(`/api/v1/keluar`, (url) =>
    axiosInstance
      .get(url, {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => res.data)
  );

  data?.map((item) => {
    dataKeluar.push(item);
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [isConfirModalOpen, setIsConfirModalOpen] = useState(false);
  const [isSuccesModalOpen, setIsSuccesModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredItems = dataKeluar.filter(
    (item) =>
      item.item.toLowerCase().includes(search.toLowerCase()) ||
      item.supplierID.toLowerCase().includes(search.toLowerCase()) ||
      item.tanggalKeluar.toLowerCase().includes(search.toLowerCase()) || // Filter for item.waktu
      item.qty.toString().includes(search) // Filter for item.qty
  );

  const totalFilteredPages = Math.ceil(filteredItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  const onPageChange = (page) => setCurrentPage(page);

  const openConfirModal = (id) => {
    setTargetId(id);
    setIsConfirModalOpen(true);
  };

  const closeConfirModal = () => {
    setIsConfirModalOpen(false);
    setIsSuccesModalOpen(true);
  };

  const closeSuccesModal = () => {
    setIsSuccesModalOpen(false);
  };

  const closeModal = () => {
    setIsConfirModalOpen(false);
  };

  const handleDelete = async () => {
    await axiosInstance.delete(`/api/v1/keluar?id=${targetId}`, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });
    mutate("/api/v1/keluar");
    setIsConfirModalOpen(false);
    setIsSuccesModalOpen(true);
  }

  return (
    <AdminLayout titlePage="Barang Keluar">
      <div className="flex flex-col ">
        <div className="my-2 flex justify-between items-center">
          <SearchBar
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
          <Link
            to="/barang-keluar/tambah-barang-keluar"
            className="w-[155px] bg-[#6B240C] py-2 text-center text-white rounded-md "
          >
            + Barang Keluar
          </Link>
        </div>
        <div className=" overflow-x-auto rounded-md mt-4 mb-6 h-96 flex flex-col justify-between">
          <table className="w-full text-[18px] text-center rtl:text-right  ">
            <thead className="   bg-[#F0F0F0]">
              <tr className="border-b-2 border-white  ">
                <th scope="col" className="p-[10px] font-medium">
                  No
                </th>
                <th scope="col" className="p-[10px] font-medium">
                  Nama Item
                </th>
                <th scope="col" className="p-[10px] font-medium">
                  Tanggal Keluar
                </th>
                <th scope="col" className="p-[10px] font-medium">
                  Supplier ID
                </th>
                <th scope="col" className="p-[10px] font-medium">
                  Qty
                </th>

                <th scope="col" className="p-[10px] font-medium">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedItems.map((item, index) => (
                <tr
                  key={index}
                  className=" border-b-2 border-white bg-[#F0F0F0]  "
                >
                  <td scope="row" className="px-6 py-4 ">
                    {itemsPerPage * (currentPage - 1) + (index + 1)}
                  </td>
                  <td className="px-6 py-4">{item.item}</td>
                  <td className="px-6 py-4">{item.tanggalKeluar}</td>
                  <td className="px-6 py-4">{item.supplierID}</td>
                  <td className="px-6 py-4">{item.qty}</td>
                  <td className="px-6 py-4 flex space-x-3 justify-center">
                    <DeleteButton onClick={()=>openConfirModal(item.id)} />
                    <EditButton
                      onClick={() =>
                        navigate(`/barang-keluar/edit-barang-keluar/`, {
                          state: item,
                        })
                      }
                    />
                    {isConfirModalOpen && (
                      <ConfirmationPopUP
                        Ok={() => handleDelete()}
                        Cancel={closeModal}
                        teks=" Anda Yakin Ingin Menghapus Data"
                        type="button"
                      />
                    )}
                    {isSuccesModalOpen && (
                      <SucsessPopUp
                        onClick={closeSuccesModal}
                        type="button"
                        teks="Data Sudah Terhapus"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center items-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalFilteredPages}
              onPageChange={onPageChange}
              showIcons
              previousLabel=""
              nextLabel=""
              theme={{
                pages: {
                  base: "xs:mt-0 mt-2 inline-flex gap-x-2 items-center -space-x-px ",
                  showIcon: "inline-flex",
                  previous: {
                    base: "bg-[#E1E1E1] px-3 py-2 rounded-md hover:bg-[#E1E1E1]  ",
                    icon: "h-6 w-5",
                  },
                  next: {
                    base: "bg-[#E1E1E1] px-3 py-2 rounded-md hover:bg-[#E1E1E1]  ",
                    icon: "h-6 w-5",
                  },
                  selector: {
                    base: "bg-[#E1E1E1] px-3 py-2 rounded-md w-[35px]",
                    active:
                      "bg-[#A8A196]  hover:bg-[#A8A196]  hover:text-black dark:border-gray-700 text-black",
                    disabled: "opacity-50 cursor-normal",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ExitItemPages;
