import React, { useState } from "react";
import LogsPopUp from "../components/Fragments/LogsPopUp";
import ConfirmationPopUp from "../components/Fragments/ConfirmationPopUp";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";
import IncorrectPasswordPopUp from "../components/Fragments/IncorretPasswordPopUp";

function Tes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const tesClick = () => {
    closeModal();
  };

  return (
    <div className="bg-teal-400 h-screen">
      <button onClick={openModal}>Open Logs</button>
      {isModalOpen && (
        // <ConfirmationPopUp onClick={tesClick} Ok={tesClick} Delete={tesClick} teks=" Anda Yakin Ingin Menghapus Data" type="button"/>
        // <SucsessPopUp
        //   onClick={tesClick}
        //   type="button"
        //   teks="Data Sudah Terhapus"
        // />
        <IncorrectPasswordPopUp
          onClick={tesClick}
          type="button"
          teks="Password Salah"
        />
      )}
    </div>
  );
}

export default Tes;
