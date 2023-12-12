import React from "react";
import CardAdmin from "../Elements/CardAdmin";
import AdminMenu from "../Fragments/AdminMenu";
import HeaderAdmin from "../Fragments/HeaderAdmin";

const AdminLayout = (props) => {
  const { children, titlePage } = props;
  return (
    <div className="bg-[#E48F45] p-[5px] h-screen">
      <div className="flex justify-between">
        <div className="w-1/5">
          <AdminMenu />
        </div>

        <CardAdmin>
          <HeaderAdmin />
          <p className="text-[32px] font-medium mt-6">{titlePage}</p>
          {children}
        </CardAdmin>
      </div>
    </div>
  );
};

export default AdminLayout;
