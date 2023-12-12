import React from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import SearchBar from "../components/Elements/SearchBar";
import ActionButton from "../components/Elements/ActionButton";
import EditButton from "../components/Elements/EditButton";
import DeleteButton from "../components/Elements/DeleteButton";

function UserPages() {
  const tesClick = () => {
    console.log("Tes");
  };

  return (
    <AdminLayout titlePage="Pengguna">
      <div className="flex flex-col ">
        <div className="my-2 flex justify-between items-center">
          <SearchBar style="left-[23%]" />
          <ActionButton teks="+ Buat Pengguna Baru" lebar="px-4" />
        </div>
        <div className="relative overflow-x-auto rounded-md mt-4 mb-6 ">
          <table className="w-full text-[18px] text-center rtl:text-right  ">
            <thead className=" uppercase  bg-[#F0F0F0]">
              <tr className="border-b-2 border-white  ">
                <th scope="col" className="p-[10px] font-medium">
                  No
                </th>
                <th scope="col" className="p-[10px] font-medium">
                  Nama
                </th>
                <th scope="col" className="p-[10px] font-medium">
                  Email
                </th>
                <th scope="col" className="p-[10px] font-medium">
                  Role
                </th>

                <th scope="col" className="p-[10px] font-medium">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-b-2 border-white bg-[#F0F0F0]  ">
                <td scope="row" className="px-6 py-4 ">
                  1
                </td>
                <td className="px-6 py-4">Sumanto</td>
                <td className="px-6 py-4">sumanto@gmail.com</td>
                <td className="px-6 py-4">Admin</td>
                

                <td className="px-6 py-4 flex space-x-3 justify-center">
                  <DeleteButton onClick={tesClick} />
                  <EditButton onClick={tesClick} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

export default UserPages;
