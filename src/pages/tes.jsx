// import React from "react";


function tes() {
  const opsi = [
    { id: 0, value: "", label: "Pilih Role" },
    { id: 1, value: "admin", label: "Admin" },
    { id: 2, value: "user", label: "User" },
    { id: 3, value: "umum", label: "Umum" },
  ];
  return (
    // <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center first-letter ">
    //   <div className="bg-white py-[8px] px-[13px] w-[329px] rounded-md">
    //     <div className="flex justify-between items-center border-b border-black">
    //       <p className="text-[24px] font-medium">Tambah Item</p>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="31"
    //         height="30"
    //         viewBox="0 0 31 30"
    //         fill="none"
    //       >
    //         <path
    //           d="M22.9004 7.5L7.90039 22.5"
    //           stroke="black"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         />
    //         <path
    //           d="M7.90039 7.5L22.9004 22.5"
    //           stroke="black"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         />
    //       </svg>
    //     </div>
    //     <div className="my-4">
    //       <p className="text-[24px]">Item</p>
    //       <select
    //         id="countries"
    //         className=" border border-[#8B8B8B] text-gray-900 text-sm rounded-lg focus:outline-none focus:visible focus:ring-[#8B8B8B] focus:border-[#8B8B8B] block w-64 p-2.5
    //   mt-2"
    //       >
    //         {opsi.map((option) => (
    //           <option key={option.id} value={option.value}>
    //             {option.label}
    //           </option>
    //         ))}
    //       </select>
    //     </div>
    //     <div className="flex justify-end">
    //       <button className="text-center text-white bg-[#6B240C] p-[10px]  rounded-md  ">
    //         Simpan
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white py-[8px] px-[13px] w-96 rounded-md">
        <div className="flex justify-between items-center border-b border-black">
          <p className="text-[24px] font-medium">Tambah Item</p>
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
          >
            <path
              d="M22.9004 7.5L7.90039 22.5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.90039 7.5L22.9004 22.5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="my-4">
          <p className="text-[24px]">Item</p>
          <select
            id="countries"
            className="border border-[#8B8B8B] text-gray-900 text-sm rounded-lg focus:outline-none focus:visible focus:ring-[#8B8B8B] focus:border-[#8B8B8B] block w-8/12 p-2.5 mt-2"
          >
            {opsi.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end">
          <button className="text-center text-white bg-[#6B240C] p-[10px] rounded-md">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

export default tes;
