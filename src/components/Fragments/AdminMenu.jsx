// eslint-disable-next-line no-unused-vars
import React from "react";
import MenuList from "./MenuList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Exit from "./Menu Admin/Exit";
import SucsessPopUp from "./SucsessPopUp";
import ConfirmationPopUP from "./ConfirmationPopUp";
import { axiosInstance } from "../../utils/AxiosInstance";

function AdminMenu() {
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
    navigate("/");
  };

  const closeModal = () => {
    setIsConfirModalOpen(false);
  };

  const handleLogout = async () => {
    await axiosInstance.post(`/api/v1/logout`, {
      token : localStorage.getItem("token"),
    },{
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div className="  flex flex-col space-y-6">
      <div className="flex justify-center items-center py-[39px]   ">
        <img src="/public/headerLogo.png" alt="headerLogo" />
      </div>
      <div className=" h-auto w-full">
        <MenuList />
      </div>
      <div className=" h-[125px] flex items-end justify-center">
        <button
          onClick={openConfirModal}
          to="/"
          className="flex justify-center items-center bg-[#902F2F] rounded-md px-[15px] shadow-md py-[5px]"
        >
          <Exit />
        </button>
        {isConfirModalOpen && (
          <ConfirmationPopUP
            Ok={()=>handleLogout()}
            Cancel={closeModal}
            teks=" Anda Yakin Ingin Logout"
            type="button"
          />
        )}
        {isSuccesModalOpen && (
          <SucsessPopUp
            onClick={closeSuccesModal}
            type="button"
            teks="Anda Berhasil Logout"
          />
        )}
      </div>
    </div>
  );
}

export default AdminMenu;
