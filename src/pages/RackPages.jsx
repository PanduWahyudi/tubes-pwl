import React from "react";
import { useState } from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import SearchBar from "../components/Elements/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import EditButton from "../components/Elements/EditButton";
import DeleteButton from "../components/Elements/DeleteButton";
import Pagination from "../components/Elements/Pagination";
import ConfirmationPopUP from "../components/Fragments/ConfirmationPopUp";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";
import RackButton from "../components/Elements/RackButton";

function RackPages() {
  const navigate = useNavigate()
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
    <AdminLayout titlePage="Rack">
      <div className="flex flex-col ">
        <div className="my-2 flex justify-between items-center">
          <SearchBar style="left-[23%]" />
          <Link
            to="/rack/tambah-rack"
            className="w-[112px] bg-[#6B240C] py-2 text-center text-white rounded-md "
          >
            + Buat Rack
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
                  <RackButton />
                  <DeleteButton onClick={openConfirModal} />
                  <EditButton onClick={()=>navigate("/rack/edit-rack")} />
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

export default RackPages;
