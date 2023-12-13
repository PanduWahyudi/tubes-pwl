import React from "react";
import ClosePopUpLogsButton from "../Elements/ClosePopUpLogsButton";
import Pagination from "../Elements/Pagination";

function LogsPopUp({ onClick, pageCount }) {
  return (
    <>
      {/* Modal */}
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center ">
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-40"
          onClick={onClick}
        ></div>
        {/* Modal content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[10px] w-11/12 h-[600px] bg-[#E48F45] rounded-md">
          <div className="flex justify-between items-center p-2">
            <p className="text-[24px] font-medium">Logs</p>
            <ClosePopUpLogsButton type="button" onClick={onClick} />
          </div>
          <div className="p-[11px] rounded-md w-auto bg-white flex flex-col justify-between h-[500px]">
            <div className="relative overflow-x-auto rounded-md mt-4 mb-6">
              <table className="w-full text-[18px] text-center rtl:text-right">
                <thead className="uppercase bg-[#F0F0F0]">
                  <tr className="border-b-2 border-white">
                    <th scope="col" className="p-[10px] font-medium">
                      No
                    </th>
                    <th scope="col" className="p-[10px] font-medium">
                      Nama
                    </th>
                    <th scope="col" className="p-[10px] font-medium">
                      Waktu
                    </th>
                    <th scope="col" className="p-[10px] font-medium">
                      Nama Item
                    </th>
                    <th scope="col" className="p-[10px] font-medium">
                      Kategori
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-white bg-[#F0F0F0]">
                    <td scope="row" className="px-6 py-4">
                      1
                    </td>
                    <td className="px-6 py-4">Sumanto</td>
                    <td className="px-6 py-4">25/11/2023</td>
                    <td className="px-6 py-4">Televisi</td>
                    <td className="px-6 py-4">Elektronik</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Pagination pageCount={pageCount} />
          </div>
        </div>
      </div>
    </>
  );
}

export default LogsPopUp;
