import React from "react";
import { useState } from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import SearchBar from "../components/Elements/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import EditButton from "../components/Elements/EditButton";
import DeleteButton from "../components/Elements/DeleteButton";
import ConfirmationPopUP from "../components/Fragments/ConfirmationPopUp";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";

function ExitItemPages() {
  const navigate = useNavigate();
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
    <AdminLayout titlePage="Barang Keluar">
      <div className="flex flex-col ">
        <div className="my-2 flex justify-between items-center">
          <SearchBar style="left-[23%]" />
          <Link
            to="/barang-keluar/tambah-barang-keluar"
            className="w-[155px] bg-[#6B240C] py-2 text-center text-white rounded-md "
          >
            + Barang Keluar
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
                  Tanggal Masuk
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
              <tr className=" border-b-2 border-white bg-[#F0F0F0]  ">
                <td scope="row" className="px-6 py-4 ">
                  1
                </td>
                <td className="px-6 py-4">Televisi</td>
                <td className="px-6 py-4">25/11/2023</td>
                <td className="px-6 py-4">SP0001</td>
                <td className="px-6 py-4">100</td>

                <td className="px-6 py-4 flex space-x-3 justify-center">
                  <DeleteButton onClick={openConfirModal} />
                  <EditButton
                    onClick={() =>
                      navigate("/barang-keluar/edit-barang-keluar")
                    }
                  />
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
        </div>
      </div>
    </AdminLayout>
  );
}

export default ExitItemPages;
