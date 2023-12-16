import React from "react";
import { useState } from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import { useNavigate } from "react-router-dom";
import Input from "../components/Elements/Input";
import { useForm } from "react-hook-form";
import ActionButton from "../components/Elements/ActionButton";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";

function AddCategoryPages() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { kategori: "" },
  });

  const [isSuccesUpdate, setIsSuccesUpdate] = useState(false);

  const onSubmit = (data) => {
    setIsSuccesUpdate(true);
    console.log(data);
  };
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ kategori: "" });
    }
  }, [formState, reset]);

  const navigate = useNavigate();

  const closeSuccesUpdate = () => {
    setIsSuccesUpdate(false);

    navigate("/produk/kategori");
  };
  return (
    <AdminLayout titlePage="Tambah Kategori">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-4">
          <Input
            type="text"
            label="Nama Kategori"
            placeholder="Nama Kategori"
            propsRegis={{
              ...register("kategori", {
                required: "Please enter your item",
              }),
            }}
          />
          <div className=" flex justify-end">
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

export default AddCategoryPages;
