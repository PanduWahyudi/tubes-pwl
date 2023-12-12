import React from "react";
import Logo from "../Elements/Logo";
import MenuList from "./MenuList";
import { Link } from "react-router-dom";
import Exit from "./Menu Admin/Exit";

function AdminMenu() {
  return (
    <div className="  flex flex-col space-y-6">
      <div className="flex justify-center items-center py-[39px]   ">
        <Logo percentLeft="left-[8.06%]" />
      </div>
      <div className=" h-auto w-full">
        <MenuList />
      </div>
      <div className=" h-[125px] flex items-end justify-center">
        <Link className="flex justify-center items-center bg-[#902F2F] rounded-md px-[15px] shadow-md py-[5px]">
          <Exit />
        </Link>
      </div>
    </div>
  );
}

export default AdminMenu;
