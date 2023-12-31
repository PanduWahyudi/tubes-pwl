import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../components/Layouts/AdminLayout";
import { useForm } from "react-hook-form";
import ActionButton from "../components/Elements/ActionButton";
import Input from "../components/Elements/Input";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";
import { axiosInstance } from "../utils/AxiosInstance";
import useSWR from "swr";

function CreateItemPages() {
  let opsi = [];

  const {
    data:dataKategori,
    error,
    isLoading,
  } = useSWR(`/api/v1/kategori`, (url)=> axiosInstance.get(url, {
    headers: {
      "ngrok-skip-browser-warning": "69420",
    },
  }).then((res) => res.data)
  );

  if(dataKategori){
    dataKategori.map((item)=>{
      opsi.push(item)
    })
  }

  const [isSuccesUpdate, setIsSuccesUpdate] = useState(false);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { name: "", id: null },
  });

  const onSubmit = async (data) => {
    const dataUpdate = {
      name : data.name,
      kategoriId : parseInt(data.id)
    }
    await axiosInstance.post(`/api/v1/item`, dataUpdate, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    setIsSuccesUpdate(true);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: "", id: null });
    }
  }, [formState, reset]);

  const navigate = useNavigate();

  const closeSuccesUpdate = () => {
    setIsSuccesUpdate(false);

    navigate("/item");
  };

  return (
    <AdminLayout titlePage="Tambah Item">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <Input
            type="text"
            label="Nama Item"
            placeholder="Nama Item"
            propsRegis={{
              ...register("name", {
                required: "Please enter your item",
              }),
            }}
          />
          <p className="mt-4 text-[24px] font-normal">Kategori</p>
          <select 
            id="id"
            {...register("id")}
            className=" border border-[#8B8B8B] text-gray-900 text-sm rounded-lg focus:outline-none focus:visible focus:ring-[#8B8B8B] focus:border-[#8B8B8B] block w-64 p-2.5 
      mt-2"
          >
            {opsi.map((option) => (
              <option key={option.id} value={option.id}>
                {option.kategori}
              </option>
            ))}
          </select>
          <div className="mt-2 flex justify-end">
            <ActionButton teks="Simpan" lebar="px-4 w-30" type="submit" />
          </div>
          {isSuccesUpdate && (
            <SucsessPopUp
              onClick={closeSuccesUpdate}
              type="button"
              teks="Data Tersimpan"
            />
          )}
        </div>
      </form>
    </AdminLayout>
  );
}

export default CreateItemPages;
