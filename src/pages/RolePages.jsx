import { useState } from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import SearchBar from "../components/Elements/SearchBar";
import EditButton from "../components/Elements/EditButton";
import { Link, useNavigate } from "react-router-dom";
import DeleteButton from "../components/Elements/DeleteButton";
import ConfirmationPopUP from "../components/Fragments/ConfirmationPopUp";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";
import { Pagination } from "flowbite-react";
import { axiosInstance } from "../utils/AxiosInstance";
import useSWR, { mutate } from "swr";

function RolePages() {
  const dummy = [
    {
      id: 1,
      role: "Admin",
    },
    {
      id: 2,
      role: "User ",
    },
    {
      id: 3,
      role: "User ",
    },
    {
      id: 4,
      role: "Admin ",
    },
    {
      id: 5,
      role: "Admin ",
    },
    {
      id: 6,
      role: "Admin ",
    },
    {
      id: 7,
      role: "Admin ",
    },
    {
      id: 8,
      role: "User ",
    },
    {
      id: 9,
      role: "User ",
    },
  ];

  let dataRole = [];

  const { data } = useSWR(`/api/v1/role`, (url) =>
    axiosInstance
      .get(url, {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => res.data)
  );

  data?.map((item) => {
    dataRole.push(item);
  });

  console.log(dataRole);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [isConfirModalOpen, setIsConfirModalOpen] = useState(false);
  const [isSuccesModalOpen, setIsSuccesModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredItems = dataRole.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalFilteredPages = Math.ceil(filteredItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  const onPageChange = (page) => setCurrentPage(page);
  const [targetId, setTargetId] = useState();

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

  const navigate = useNavigate();

  const handleDelete = async () => {
    await axiosInstance.delete(`/api/v1/role?id=${targetId}`, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });
    mutate("/api/v1/role");
    setIsConfirModalOpen(false);
    setIsSuccesModalOpen(true);
  };

  return (
    <AdminLayout titlePage="Role">
      <div className="flex flex-col ">
        <div className="my-2 flex justify-between items-center">
          <SearchBar
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1); // Reset current page when search changes
            }}
          />
          <Link
            to="/role/tambah-role"
            className="w-[112px] bg-[#6B240C] py-2 text-center text-white rounded-md "
          >
            + Buat Role
          </Link>
        </div>
        <div className=" overflow-x-auto rounded-md mt-4 mb-6 h-96 flex flex-col justify-between">
          <table className="w-full text-[18px] text-center rtl:text-right  ">
            <thead className="   bg-[#F0F0F0]">
              <tr className="border-b-2 border-white  ">
                <th scope="col" className="p-[10px] font-medium">
                  No
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
              {paginatedItems.map((item, index) => (
                <tr
                  key={index}
                  className=" border-b-2 border-white bg-[#F0F0F0]  "
                >
                  <td scope="row" className="px-6 py-4 ">
                    {itemsPerPage * (currentPage - 1) + (index + 1)}
                  </td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4 flex space-x-3 justify-center">
                    <DeleteButton onClick={() => openConfirModal(item.id)} />
                    <EditButton
                      onClick={() =>
                        navigate("/role/edit-role", {
                          state: { id: item.id, name: item.name },
                        })
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
      </div>
    </AdminLayout>
  );
}

export default RolePages;
