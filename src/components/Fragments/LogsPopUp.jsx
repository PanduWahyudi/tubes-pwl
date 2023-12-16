import { useState } from "react";
import ClosePopUpLogsButton from "../Elements/ClosePopUpLogsButton";
import { Pagination } from "flowbite-react";

// eslint-disable-next-line react/prop-types
function LogsPopUp({ onClick }) {
  const dummy = [
    {
      nama: "Sumanto",
      waktu: "25/11/2023",
      item: "Televisi",
      kategori: "Elektronik",
    },
    {
      nama: "Sumanto 1",
      waktu: "25/11/2023",
      item: "Televisi",
      kategori: "Elektronik",
    },
    {
      nama: "Sumanto 2",
      waktu: "25/11/2023",
      item: "Televisi",
      kategori: "Elektronik",
    },
    {
      nama: "Sumanto 3",
      waktu: "25/11/2023",
      item: "Televisi",
      kategori: "Elektronik",
    },
    {
      nama: "Sumanto 4",
      waktu: "25/11/2023",
      item: "Televisi",
      kategori: "Elektronik",
    },
    {
      nama: "Sumanto 5",
      waktu: "25/11/2023",
      item: "Televisi",
      kategori: "Elektronik",
    },
    {
      nama: "Sumanto 6",
      waktu: "25/11/2023",
      item: "Televisi",
      kategori: "Elektronik",
    },
    {
      nama: "Sumanto 7",
      waktu: "25/11/2023",
      item: "Televisi",
      kategori: "Elektronik",
    },
    {
      nama: "Sumanto 8",
      waktu: "25/11/2023",
      item: "Televisi",
      kategori: "Elektronik",
    },
    {
      nama: "Sumanto 9",
      waktu: "25/11/2023",
      item: "Televisi",
      kategori: "Elektronik",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedItems = dummy.slice(startIndex, endIndex);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <>
      {/* Modal */}
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[99] ">
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-40"
          onClick={onClick}
        ></div>
        {/* Modal content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[10px] w-11/12 h-[600px] bg-[#E48F45]  rounded-md">
          <div className="flex justify-between items-center p-2">
            <p className="text-[24px] font-medium">Logs</p>
            <ClosePopUpLogsButton type="button" onClick={onClick} />
          </div>
          <div className="p-[11px] rounded-md w-auto bg-white flex flex-col justify-between h-[500px]">
            <div className="relative overflow-x-auto rounded-md mt-4 mb-6">
              <table className="w-full text-[18px] text-center rtl:text-right">
                <thead className=" bg-[#F0F0F0]">
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
                  {paginatedItems.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b-2 border-white bg-[#F0F0F0]"
                    >
                      <td scope="row" className="px-6 py-4">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">{item.nama}</td>
                      <td className="px-6 py-4">{item.waktu}</td>
                      <td className="px-6 py-4">{item.item}</td>
                      <td className="px-6 py-4">{item.kategori}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* <Pagination pageCount={pageCount} /> */}
            {/* <div className="flex justify-center items-center">
            <Pagination
              currentPage={currentPage}
              totalPages={100}
              onPageChange={onPageChange}
              showIcons
              previousLabel=""
              nextLabel=""
              theme={{
                pages: {
                  base: "xs:mt-0 mt-2 inline-flex gap-x-2 items-center -space-x-px ",
                  showIcon: "inline-flex",
                  previous: {
                    base: "bg-[#E1E1E1] px-3 py-2 rounded-md hover:bg-[#E1E1E1]  ",
                    icon: "h-6 w-5",
                  },
                  next: {
                    base: "bg-[#E1E1E1] px-3 py-2 rounded-md hover:bg-[#E1E1E1]  ",
                    icon: "h-6 w-5",
                  },
                  selector: {
                    base: "bg-[#E1E1E1] px-3 py-2 rounded-md ",
                    active:
                      "bg-[#E1E1E1]  hover:bg-[#E1E1E1] dark:border-gray-700 text-black",
                    disabled: "opacity-50 cursor-normal",
                  },
                },
              }}
            />
            </div> */}
            <div className="flex justify-center items-center">
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(dummy.length / itemsPerPage)}
                onPageChange={onPageChange}
                showIcons
                previousLabel=""
                nextLabel=""
                theme={{
                  pages: {
                    base: "xs:mt-0 mt-2 inline-flex gap-x-2 items-center -space-x-px ",
                    showIcon: "inline-flex",
                    previous: {
                      base: "bg-[#E1E1E1] px-3 py-2 rounded-md hover:bg-[#E1E1E1]  ",
                      icon: "h-6 w-5",
                    },
                    next: {
                      base: "bg-[#E1E1E1] px-3 py-2 rounded-md hover:bg-[#E1E1E1]  ",
                      icon: "h-6 w-5",
                    },
                    selector: {
                      base: "bg-[#E1E1E1] px-3 py-2 rounded-md ",
                      active:
                        "bg-[#A8A196]  hover:bg-[#A8A196]  hover:text-black dark:border-gray-700 text-black",
                      disabled: "opacity-50 cursor-normal",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogsPopUp;
