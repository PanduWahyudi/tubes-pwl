import React from "react";
import { useState } from "react";
import CardAdmin from "../components/Elements/CardAdmin";
import AdminMenu from "../components/Fragments/AdminMenu";
import HeaderAdmin from "../components/Fragments/HeaderAdmin";
import SearchBar from "../components/Elements/SearchBar";
import { Link } from "react-router-dom";
import EditButton from "../components/Elements/EditButton";
import DeleteButton from "../components/Elements/DeleteButton";
import ConfirmationPopUP from "../components/Fragments/ConfirmationPopUp";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";

function RackItemPages() {
  const [isConfirModalOpen, setIsConfirModalOpen] = useState(false);
  const [isSuccesModalOpen, setIsSuccesModalOpen] = useState(false);
  const [isSuccesUpdate, setIsSuccesUpdate] = useState(false);
  const [isAddItemModal, setIsAddItemModal] = useState(false);
  const [isEditItemModal, setIsEditItemModal] = useState(false);

  const openAddItemModal = () => {
    setIsAddItemModal(true);
  };

  const closeAddItemModal = () => {
    setIsAddItemModal(false);
    setIsSuccesUpdate(true);
  };

  const closeAddModal = () => {
    setIsAddItemModal(false);
  };

  const closeEditModal = () => {
    setIsEditItemModal(false);
  };

  const openEditItemModal = () => {
    setIsEditItemModal(true);
  };

  const closeEditItemModal = () => {
    setIsEditItemModal(false);
    setIsSuccesUpdate(true);
  };

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
  const closeSuccesUpdate = () => {
    setIsSuccesUpdate(false);
  };

  const closeModal = () => {
    setIsConfirModalOpen(false);
  };

  const opsi = [
    { id: 0, value: "", label: "Pilih Role" },
    { id: 1, value: "admin", label: "Admin" },
    { id: 2, value: "user", label: "User" },
    { id: 3, value: "umum", label: "Umum" },
  ];
  return (
    <div className="bg-[#E48F45] p-[5px] h-screen">
      <div className="flex justify-between">
        <div className="w-1/5">
          <AdminMenu />
        </div>

        <CardAdmin>
          <HeaderAdmin />
          <div className="flex space-x-2 items-center">
            <Link to="/rack">
              <svg
                className="mt-4"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <path
                  d="M15 28C21.9036 28 27.5 22.4036 27.5 15.5C27.5 8.59644 21.9036 3 15 3C8.09644 3 2.5 8.59644 2.5 15.5C2.5 22.4036 8.09644 28 15 28Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 20.5L12.5 15.5L17.5 10.5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <p className="text-[32px] font-medium mt-6 mb-2">Rack Electronik</p>
          </div>
          <div className="flex flex-col ">
            <div className="my-2 flex justify-between items-center">
              <SearchBar style="left-[23%]" />
              <button
                onClick={openAddItemModal}
                className="w-[112px] bg-[#6B240C] py-2 text-center text-white rounded-md "
              >
                + Buat Rack
              </button>
            </div>
            <div className=" overflow-x-auto rounded-md mt-4 mb-6 h-96 flex flex-col justify-between">
              <table className="w-full text-[18px] text-center rtl:text-right  ">
                <thead className="   bg-[#F0F0F0]">
                  <tr className="border-b-2 border-white  ">
                    <th scope="col" className="p-[10px] font-medium">
                      No
                    </th>
                    <th scope="col" className="p-[10px] font-medium">
                      Nama Rack
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
                    <td className="px-6 py-4">Elektronik</td>

                    <td className="px-6 py-4 flex space-x-3 justify-center">
                      <DeleteButton onClick={openConfirModal} />
                      <EditButton onClick={openEditItemModal} />
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
            {/* Modal Add RackItem */}
            {isAddItemModal && (
              <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white py-[8px] px-[13px] w-96 rounded-md">
                  <div className="flex justify-between items-center border-b border-black">
                    <p className="text-[24px] font-medium">Tambah Item</p>
                    <svg
                      className="cursor-pointer"
                      onClick={closeAddModal}
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                    >
                      <path
                        d="M22.9004 7.5L7.90039 22.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.90039 7.5L22.9004 22.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="my-4">
                    <p className="text-[24px]">Item</p>
                    <select
                      id="countries"
                      className="border border-[#8B8B8B] text-gray-900 text-sm rounded-lg focus:outline-none focus:visible focus:ring-[#8B8B8B] focus:border-[#8B8B8B] block w-8/12 p-2.5 mt-2"
                    >
                      {opsi.map((option) => (
                        <option key={option.id} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="text-center text-white bg-[#6B240C] p-[10px] rounded-md"
                      onClick={closeAddItemModal}
                    >
                      Simpan
                    </button>
                  </div>
                </div>
              </div>
            )}

            {isSuccesUpdate && (
              <SucsessPopUp
                onClick={closeSuccesUpdate}
                type="button"
                teks="Data Tersimpan"
              />
            )}

            {/* Modal Edit RackItem */}

            {isEditItemModal && (
              <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white py-[8px] px-[13px] w-96 rounded-md">
                  <div className="flex justify-between items-center border-b border-black">
                    <p className="text-[24px] font-medium">Edit Item</p>
                    <svg
                      onClick={closeEditModal}
                      className="cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                    >
                      <path
                        d="M22.9004 7.5L7.90039 22.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.90039 7.5L22.9004 22.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="my-4">
                    <p className="text-[24px]">Item</p>
                    <select
                      id="countries"
                      className="border border-[#8B8B8B] text-gray-900 text-sm rounded-lg focus:outline-none focus:visible focus:ring-[#8B8B8B] focus:border-[#8B8B8B] block w-8/12 p-2.5 mt-2"
                    >
                      {opsi.map((option) => (
                        <option key={option.id} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="text-center text-white bg-[#6B240C] p-[10px] rounded-md"
                      onClick={closeEditItemModal}
                    >
                      Ubah
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardAdmin>
      </div>
    </div>
  );
}

export default RackItemPages;