// import React from "react";
import CardAdmin from "../components/Elements/CardAdmin";
import AdminMenu from "../components/Fragments/AdminMenu";
import HeaderAdmin from "../components/Fragments/HeaderAdmin";

const RackLayout = ({ children }) => {
  return (
    <div className="bg-[#E48F45] p-[5px] h-screen">
      <div className="flex justify-between">
        <div className="w-1/5">
          <AdminMenu />
        </div>

        <CardAdmin>
          <HeaderAdmin />
          <div className="flex flex-col"></div>
          <div className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Floating outlined
            </label>
          </div>
        </CardAdmin>
      </div>
    </div>
  );
};

export default RackLayout;
