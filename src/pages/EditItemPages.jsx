import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../components/Layouts/AdminLayout";
import { useForm } from "react-hook-form";
import ActionButton from "../components/Elements/ActionButton";
import Input from "../components/Elements/Input";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";

function EditItemPages() {
  const { id } = useParams();
  const opsi = [
    { id: 0, value: "", label: "Pilih Kategori" },
    { id: 1, value: "elektronik", label: "Elektronik" },
    { id: 2, value: "makanan", label: "Makanan" },
    { id: 3, value: "minuman", label: "minuman" },
  ];

  const [isSuccesUpdate, setIsSuccesUpdate] = useState(false);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { item: "", countries: "" },
  });

  const [selectedOption, setSelectedOption] = useState("");

  const onSubmit = (data) => {
    console.log("Kategori yang dipilih:", selectedOption);
    setIsSuccesUpdate(true);
    console.log(data);
  };
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ item: "", countries: "" });
    }
  }, [formState, reset]);

  const navigate = useNavigate();

  const closeSuccesUpdate = () => {
    setIsSuccesUpdate(false);

    navigate("/item");
  };

  return (
    <AdminLayout titlePage="Edit Item">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <Input
            type="text"
            label="Nama Item "
            placeholder="Nama Item"
            propsRegis={{
              ...register("item", {
                required: "Please enter your item",
              }),
            }}
          />
          <p className="mt-4 text-[24px] font-normal">Kategori</p>
          <select
            id="countries"
            {...register("countries")}
            onChange={(e) => setSelectedOption(e.target.value)}
            className=" border border-[#8B8B8B] text-gray-900 text-sm rounded-lg focus:outline-none focus:visible focus:ring-[#8B8B8B] focus:border-[#8B8B8B] block w-64 p-2.5 
      mt-2"
          >
            {opsi.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="mt-2 flex justify-end">
            <ActionButton teks="Ubah" lebar="px-4 w-30" type="submit" />
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

export default EditItemPages;
