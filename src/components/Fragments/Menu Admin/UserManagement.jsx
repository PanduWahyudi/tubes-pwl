import React from "react";
import UserManagementIcon from "../../Elements/Icon/UserManagementIcon";

function UserMangement() {
  return (
    <div className="flex items-center space-x-3">
      <UserManagementIcon />
      <p className="text-[14px] font-normal"> Manajemen Pengguna</p>
    </div>
  );
}

export default UserMangement;
