import React from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";
import Input from "../components/Elements/Input";
import { useForm } from "react-hook-form";
import ActionButton from "../components/Elements/ActionButton";
import { axiosInstance } from "../utils/AxiosInstance";

function EditCategoryPages() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { kategori: "" },
  });

  const [isSuccesUpdate, setIsSuccesUpdate] = useState(false);
  const {state} = useLocation();

  const onSubmit = async (data) => {
    let dataUpdate = {
      id: state.id,
      kategori: data.kategori,
    }
    await axiosInstance.put(`/api/v1/kategori`, dataUpdate,{
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    setIsSuccesUpdate(true);
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
    <AdminLayout titlePage="Edit Kategori">
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
            <ActionButton teks="Ubah" lebar="px-4 w-30" type="submit" />
          </div>
        </div>

        {isSuccesUpdate && (
          <SucsessPopUp
            onClick={closeSuccesUpdate}
            type="button"
            teks="Data Tersimpan"
          />
        )}
      </form>
    </AdminLayout>
  );
}

export default EditCategoryPages;
