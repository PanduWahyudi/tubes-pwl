// eslint-disable-next-line no-unused-vars
import React from "react";
import AdminIcon from "../Elements/Icon/AdminIcon";

function NameAdmin() {
  const name = "Admin";
  return (
    <div className="flex items-center space-x-3">
      <AdminIcon />
      <div>
        <p>Selamat Datang</p>
        <p className="text-[14px] font-normal">{name}</p>
      </div>
    </div>
  );
}

export default NameAdmin;
