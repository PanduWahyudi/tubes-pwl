// import React from "react";
import { useState } from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import SearchBar from "../components/Elements/SearchBar";
import { Link } from "react-router-dom";
import EditButton from "../components/Elements/EditButton";
import DeleteButton from "../components/Elements/DeleteButton";
// import Pagination from "../components/Elements/Pagination";
import { Pagination } from "flowbite-react";
import ConfirmationPopUP from "../components/Fragments/ConfirmationPopUp";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";

function ItemPages() {
  const dummy = [
    {
      id: 1,
      nama: "Telvisi",
      kategori: "Elektronik",
    },
    {
      id: 2,
      nama: "Telvisi",
      kategori: "Elektronik",
    },
    {
      id: 3,
      nama: "Televisi",
      kategori: "Elektronik",
    },
    {
      id: 4,
      nama: "Televisi 1",
      kategori: "Elektronik",
    },
    {
      nama: "Televisi 2",
      kategori: "Elektronik",
    },
    {
      id: 5,
      nama: "Televisi 3",
      kategori: "Elektronik",
    },
    {
      nama: "Televisi 4",
      kategori: "Elektronik",
    },
    {
      id: 6,
      nama: "Televisi 5",
      kategori: "Elektronik",
    },
    {
      id: 7,
      nama: "Televisi 6",
      kategori: "Elektronik",
    },
    {
      nama: "Televisi 7",
      kategori: "Elektronik",
    },
    {
      id: 8,
      nama: "Televisi 8",
      kategori: "Elektronik",
    },
    {
      id: 9,
      nama: "Televisi 9",
      kategori: "Elektronik",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [isConfirModalOpen, setIsConfirModalOpen] = useState(false);
  const [isSuccesModalOpen, setIsSuccesModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredItems = dummy.filter(
    (item) =>
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.kategori.toLowerCase().includes(search.toLowerCase())
  );

  const totalFilteredPages = Math.ceil(filteredItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  const onPageChange = (page) => setCurrentPage(page);

  const openConfirModal = () => {
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

  return (
    <AdminLayout titlePage="Item">
      <div className="flex flex-col ">
        <div className="my-2 flex justify-between items-center">
          <SearchBar
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1); // Reset current page when search changes
            }}
          />
          <Link
            to="/produk/item/tambah-produk"
            className="w-[114px] bg-[#6B240C] py-2 text-center text-white rounded-md "
          >
            + Buat Item
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
                  Kategori
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
                  <td className="px-6 py-4">{item.nama}</td>
                  <td className="px-6 py-4">{item.kategori}</td>
                  <td className="px-6 py-4 flex space-x-3 justify-center">
                    <DeleteButton onClick={openConfirModal} />
                    <Link to={"/produk/item/edit-produk/" + item.id}>
                      <EditButton />
                    </Link>

                    {isConfirModalOpen && (
                      <ConfirmationPopUP
                        onClick={openConfirModal}
                        Ok={closeConfirModal}
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
          {/* <Pagination
            pageCount={5} // Jumlah halaman total
            // Callback saat halaman berubah
          /> */}

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

export default ItemPages;
