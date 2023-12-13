import React from "react";
import { useState } from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import SearchBar from "../components/Elements/SearchBar";
import ActionButton from "../components/Elements/ActionButton";
import EditButton from "../components/Elements/EditButton";
import DeleteButton from "../components/Elements/DeleteButton";
import ConfirmationPopUP from "../components/Fragments/ConfirmationPopUp";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";

function UserPages() {
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
    <AdminLayout titlePage="Pengguna">
      <div className="flex flex-col ">
        <div className="my-2 flex justify-between items-center">
          <SearchBar style="left-[23%]" />
          <ActionButton teks="+ Buat Pengguna Baru" lebar="px-4" />
        </div>
        <div className=" overflow-x-auto rounded-md mt-4 mb-6 h-96 flex flex-col justify-between">
          <table className="w-full text-[18px] text-center rtl:text-right  ">
            <thead className=" uppercase  bg-[#F0F0F0]">
              <tr className="border-b-2 border-white  ">
                <th scope="col" className="p-[10px] font-medium">
                  No
                </th>
                <th scope="col" className="p-[10px] font-medium">
                  Nama
                </th>
                <th scope="col" className="p-[10px] font-medium">
                  Email
                </th>
                <th scope="col" className="p-[10px] font-medium">
                  Role
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
                <td className="px-6 py-4">Sumanto</td>
                <td className="px-6 py-4">sumanto@gmail.com</td>
                <td className="px-6 py-4">Admin</td>

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
        </div>
      </div>
    </AdminLayout>
  );
}

export default UserPages;
