import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import CardAdmin from "../components/Elements/CardAdmin";
import AdminMenu from "../components/Fragments/AdminMenu";
import HeaderAdmin from "../components/Fragments/HeaderAdmin";
import { Pagination } from "flowbite-react";
import SearchBar from "../components/Elements/SearchBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import EditButton from "../components/Elements/EditButton";
import DeleteButton from "../components/Elements/DeleteButton";
import ConfirmationPopUP from "../components/Fragments/ConfirmationPopUp";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";
import { axiosInstance } from "../utils/AxiosInstance";
import useSWR, { mutate } from "swr";

function RackItemPages() {
  let dataRackItem = [];
  const { state } = useLocation();
  const [targetId, setTargetId] = useState();
  const navigate = useNavigate();

  let opsi = [];

  const { data } = useSWR(`/api/v1/getItemByRackId?rackId=${state.id}`, (url) =>
    axiosInstance
      .get(url, {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => res.data)
  );

  const { data: dataItem } = useSWR(`/api/v1/item`, (url) =>
    axiosInstance
      .get(url, {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => res.data)
  );

  dataItem?.map((item) => {
    opsi.push(item);
  });

  data?.map((item) => {
    dataRackItem.push(item);
  });

  const [isSuccesUpdate, setIsSuccesUpdate] = useState(false);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { itemId: "" },
  });

  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    reset: resetEdit,
    formState: formStateEdit,
  } = useForm({
    defaultValues: { itemId: "" },
  });
  const [selectedOption, setSelectedOption] = useState("");

  const onSubmit = async (data) => {
    let dataCreate = {
      itemId: parseInt(data.itemId),
      rackId: state.id,
    };
    await axiosInstance.post("/api/v1/RITEM", dataCreate, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });
    mutate(`/api/v1/getItemByRackId?rackId=${state.id}`);
    reset({ itemId: "" });
    setIsAddItemModal(false);
    setIsEditItemModal(false);
    setIsSuccesUpdate(true);
  };

  const onSubmitEdit = async (data) => {
    let dataCreate = {
      id: targetId,
      itemId: parseInt(data.itemId),
      rackId: state.id,
    };
    await axiosInstance.put("/api/v1/RITEM", dataCreate, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });
    resetEdit({ itemId: "" });
    mutate(`/api/v1/getItemByRackId?rackId=${state.id}`);
    setIsAddItemModal(false);
    setIsEditItemModal(false);
    setIsSuccesUpdate(true);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ itemId: "" });
    }
  }, [formState, reset]);

  const closeSuccesUpdate = () => {
    setIsSuccesUpdate(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [search, setSearch] = useState("");

  const filteredItems = dataRackItem.filter((item) =>
    item.item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalFilteredPages = Math.ceil(filteredItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  const onPageChange = (page) => setCurrentPage(page);

  const [isConfirModalOpen, setIsConfirModalOpen] = useState(false);
  const [isSuccesModalOpen, setIsSuccesModalOpen] = useState(false);

  const [isAddItemModal, setIsAddItemModal] = useState(false);
  const [isEditItemModal, setIsEditItemModal] = useState(false);

  const openAddItemModal = () => {
    setIsAddItemModal(true);
  };

  const closeAddModal = () => {
    setIsAddItemModal(false);
  };

  const closeEditModal = () => {
    setIsEditItemModal(false);
  };

  const openEditItemModal = (id, kategoriID) => {
    setTargetId(id);
    setIsEditItemModal(true);
  };

  const openConfirModal = (id) => {
    setTargetId(id);
    setIsConfirModalOpen(true);
  };

  const closeConfirModal = () => {
    setIsConfirModalOpen(false);
    setIsSuccesModalOpen(true);
  };

  const closeSuccesModal = () => {
    setIsSuccesModalOpen(false);
  };

  const closeModal = () => {
    setIsConfirModalOpen(false);
  };

  const handleDelete = async () => {
    await axiosInstance.delete(`/api/v1/RITEM?id=${targetId}`, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });
    mutate(`/api/v1/getItemByRackId?rackId=${state.id}`);
    closeModal();
    setIsSuccesModalOpen(true);
  };

  return (
    <div className="bg-[#E48F45] p-[5px] h-screen">
      <div className="flex justify-between">
        <div className="w-1/5">
          <AdminMenu />
        </div>
        <CardAdmin>
          <HeaderAdmin />
          <div className="flex space-x-2 items-center">
            <Link to="/rack">
              <svg
                className="mt-4"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <path
                  d="M15 28C21.9036 28 27.5 22.4036 27.5 15.5C27.5 8.59644 21.9036 3 15 3C8.09644 3 2.5 8.59644 2.5 15.5C2.5 22.4036 8.09644 28 15 28Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 20.5L12.5 15.5L17.5 10.5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <p className="text-[32px] font-medium mt-6 mb-2">Rack Electronik</p>
          </div>
          <div className="flex flex-col ">
            <div className="my-2 flex justify-between items-center">
              <SearchBar
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1); // Reset current page when search changes
                }}
              />
              <button
                onClick={openAddItemModal}
                className="w-[142px] bg-[#6B240C] py-2 text-center text-white rounded-md "
              >
                + Tambah Item
              </button>
            </div>
            <div className=" overflow-x-auto rounded-md mt-4 mb-6 h-96 flex flex-col justify-between">
              <table className="w-full text-[18px] text-center rtl:text-right  ">
                <thead className="   bg-[#F0F0F0]">
                  <tr className="border-b-2 border-white  ">
                    <th scope="col" className="p-[10px] font-medium">
                      No
                    </th>
                    <th scope="col" className="p-[10px] font-medium">
                      Nama Rack
                    </th>

                    <th scope="col" className="p-[10px] font-medium">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedItems.map((item, index) => (
                    <tr
                      key={index}
                      className=" border-b-2 border-white bg-[#F0F0F0]  "
                    >
                      <td scope="row" className="px-6 py-4 ">
                        {itemsPerPage * (currentPage - 1) + (index + 1)}
                      </td>
                      <td className="px-6 py-4">{item.item.name}</td>

                      <td className="px-6 py-4 flex space-x-3 justify-center">
                        <DeleteButton
                          onClick={() => openConfirModal(item.id)}
                        />
                        <EditButton
                          onClick={() =>
                            openEditItemModal(item.id, item.item.kategoriId)
                          }
                        />
                        {isConfirModalOpen && (
                          <ConfirmationPopUP
                            Ok={() => handleDelete()}
                            Cancel={closeModal}
                            teks=" Anda Yakin Ingin Menghapus Data"
                            type="button"
                          />
                        )}
                        {isSuccesModalOpen && (
                          <SucsessPopUp
                            onClick={closeSuccesModal}
                            type="button"
                            teks="Data Sudah Terhapus"
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center items-center">
                {totalFilteredPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalFilteredPages}
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
                          base: "bg-[#E1E1E1] px-3 py-2 rounded-md w-[35px] ",
                          active:
                            "bg-[#A8A196]  hover:bg-[#A8A196]  hover:text-black dark:border-gray-700 text-black",
                          disabled: "opacity-50 cursor-normal",
                        },
                      },
                    }}
                  />
                )}
              </div>
            </div>
            {/* Modal Add RackItem */}
            {isAddItemModal && (
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-[99]">
                  <div className="bg-white py-[8px] px-[13px] w-96 rounded-md">
                    <div className="flex justify-between items-center border-b border-black">
                      <p className="text-[24px] font-medium">Tambah Item</p>
                      <svg
                        className="cursor-pointer"
                        onClick={closeAddModal}
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
                        id="itemId"
                        {...register("itemId")}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="border border-[#8B8B8B] text-gray-900 text-sm rounded-lg focus:outline-none focus:visible focus:ring-[#8B8B8B] focus:border-[#8B8B8B] block w-8/12 p-2.5 mt-2"
                      >
                        {opsi.map((option, index) => (
                          <option key={index} value={option.id}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="text-center text-white bg-[#6B240C] p-[10px] rounded-md"
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}

            {isSuccesUpdate && (
              <SucsessPopUp
                onClick={closeSuccesUpdate}
                type="button"
                teks="Data Tersimpan"
              />
            )}

            {/* Modal Edit RackItem */}

            {isEditItemModal && (
              <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-[99]">
                <form action="" onSubmit={handleSubmitEdit(onSubmitEdit)}>
                  <div className="bg-white py-[8px] px-[13px] w-96 rounded-md">
                    <div className="flex justify-between items-center border-b border-black">
                      <p className="text-[24px] font-medium">Edit Item</p>
                      <svg
                        onClick={closeEditModal}
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
                        id="itemId"
                        {...registerEdit("itemId")}
                        className="border border-[#8B8B8B] text-gray-900 text-sm rounded-lg focus:outline-none focus:visible focus:ring-[#8B8B8B] focus:border-[#8B8B8B] block w-8/12 p-2.5 mt-2"
                      >
                        {opsi.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="text-center text-white bg-[#6B240C] p-[10px] rounded-md"
                      >
                        Ubah
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </CardAdmin>
      </div>
    </div>
  );
}

export default RackItemPages;
