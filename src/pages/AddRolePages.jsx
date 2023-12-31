import React from "react";
import { useForm } from "react-hook-form";
import AdminLayout from "../components/Layouts/AdminLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Elements/Input";
import ActionButton from "../components/Elements/ActionButton";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";
import { axiosInstance } from "../utils/AxiosInstance";

function AddRolePages() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {  name: "" },
  });

  const [isSuccesUpdate, setIsSuccesUpdate] = useState(false);

  const onSubmit = async (data) => {
    await axiosInstance.post(`/api/v1/role`, data, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    setIsSuccesUpdate(true);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: "" });
    }
  }, [formState, reset]);

  const navigate = useNavigate();

  const closeSuccesUpdate = () => {
    setIsSuccesUpdate(false);
    navigate("/role");
  };

  return (
    <AdminLayout titlePage="Tambah Role">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-8">
          <Input
            type="text"
            label="Nama Role"
            placeholder="Nama Role"
            propsRegis={{
              ...register("name", {
                required: "Please enter your role.",
              }),
            }}
          />

          <div className="mt-10 flex justify-end">
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

export default AddRolePages;
