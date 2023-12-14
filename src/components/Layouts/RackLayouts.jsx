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
          {children}
        </CardAdmin>
      </div>
    </div>
  );
};

export default RackLayout;
