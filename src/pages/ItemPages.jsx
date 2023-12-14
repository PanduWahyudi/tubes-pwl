import React from "react";
import { useState } from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import SearchBar from "../components/Elements/SearchBar";
import { Link } from "react-router-dom";
import ActionButton from "../components/Elements/ActionButton";
import EditButton from "../components/Elements/EditButton";
import DeleteButton from "../components/Elements/DeleteButton";
import Pagination from "../components/Elements/Pagination";
import ConfirmationPopUP from "../components/Fragments/ConfirmationPopUp";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";

function ItemPages() {
  const [isConfirModalOpen, setIsConfirModalOpen] = useState(false);
  const [isSuccesModalOpen, setIsSuccesModalOpen] = useState(false);

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
          <SearchBar style="left-[23%]" />
          <Link
            to="/produk/item/tambah-produk"
            className="w-[114px] bg-[#6B240C] py-2 text-center text-white rounded-md "
          >
            + Buat Item
          </Link>
        </div>
        <div className=" overflow-x-auto rounded-md mt-4 mb-6 h-96 flex flex-col justify-between">
          <table className="w-full text-[18px] text-center rtl:text-right  ">
            <thead className=" uppercase  bg-[#F0F0F0]">
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
              <tr className=" border-b-2 border-white bg-[#F0F0F0]  ">
                <td scope="row" className="px-6 py-4 ">
                  1
                </td>
                <td className="px-6 py-4">Televisi</td>
                <td className="px-6 py-4">Elektronik</td>

                <td className="px-6 py-4 flex space-x-3 justify-center">
                  <DeleteButton onClick={openConfirModal} />
                  <EditButton />
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
            </tbody>
          </table>
          <Pagination
            pageCount={5} // Jumlah halaman total
            // Callback saat halaman berubah
          />
        </div>
      </div>
    </AdminLayout>
  );
}

export default ItemPages;
