import * as React from "react";
import { useState } from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import DeleteButton from "../components/Elements/DeleteButton";
import EditButton from "../components/Elements/EditButton";
import Pagination from "../components/Elements/Pagination";
import SearchBar from "../components/Elements/SearchBar";

function Tes() {
  const tesClick = () => {
    console.log("Tes");
  };

  const [currentPage, setCurrentPage] = useState(1); // halaman awal

  const handlePageChange = (page) => {
    // Handle logika untuk mengganti data atau melakukan fetch data untuk halaman baru
    // Contoh: fetchData(page);
    console.log(`Fetching data for page ${page}`);
    setCurrentPage(page);
  };

  return (
    <AdminLayout titlePage="Ini Halaman Testing">
      {/* <ActionButton
          type="button"
          onClick={tesClick}
          teks="Testing"
          lebar="px-10 "
        /> */}
      <SearchBar />

      <div className="relative overflow-x-auto rounded-md mt-4 mb-6 ">
        <table className="w-full text-[18px] text-center rtl:text-right  ">
          <thead className=" uppercase  bg-[#F0F0F0]">
            <tr className="border-b-2 border-white  ">
              <th scope="col" className="p-[10px] font-medium">
                No
              </th>
              <th scope="col" className="p-[10px] font-medium">
                Nama Item
              </th>
              <th scope="col" className="p-[10px] font-medium">
                Tanggal Keluar
              </th>
              <th scope="col" className="p-[10px] font-medium">
                Supplier
              </th>
              <th scope="col" className="p-[10px]font-medium">
                Qty
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
              <td className="px-6 py-4">Televisi</td>
              <td className="px-6 py-4">25/11/2023</td>
              <td className="px-6 py-4">1291ojuo</td>
              <td className="px-6 py-4">10</td>
              <td className="px-6 py-4 flex space-x-3 justify-center">
                <DeleteButton onClick={tesClick} />
                <EditButton onClick={tesClick} />
              </td>
            </tr>
            <tr className=" border-b-2 border-white bg-[#F0F0F0]  ">
              <td scope="row" className="px-6 py-4 ">
                1
              </td>
              <td className="px-6 py-4">Televisi</td>
              <td className="px-6 py-4">25/11/2023</td>
              <td className="px-6 py-4">1291ojuo</td>
              <td className="px-6 py-4">10</td>
              <td className="px-6 py-4 flex space-x-3 justify-center">
                <DeleteButton onClick={tesClick} />
                <EditButton onClick={tesClick} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination
        pageCount={5} // Jumlah halaman total
        onPageChange={handlePageChange} // Callback saat halaman berubah
      />
    </AdminLayout>
  );
}

export default Tes;
