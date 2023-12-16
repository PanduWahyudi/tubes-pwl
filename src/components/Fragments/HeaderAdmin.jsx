// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import Logs from "./Logs";
import NameAdmin from "./NameAdmin";
import LogsPopUp from "./LogsPopUp";

function HeaderAdmin() {
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
    <div>
      <div className="flex justify-between">
        <NameAdmin />
        <Logs type="button" onClick={openModal} />
        {isModalOpen && <LogsPopUp onClick={tesClick} pageCount={5} />}
      </div>
    </div>
  );
}

export default HeaderAdmin;
