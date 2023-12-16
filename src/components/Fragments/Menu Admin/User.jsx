// eslint-disable-next-line no-unused-vars
import React from "react";
import UserIcon from "../../Elements/Icon/UserIcon";

function User() {
  return (
    <div className="flex items-center space-x-3">
      <UserIcon />
      <p className="text-[14px] font-normal"> Pengguna </p>
    </div>
  );
}

export default User;
