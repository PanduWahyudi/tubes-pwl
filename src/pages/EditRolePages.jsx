import React from "react";
import { useForm } from "react-hook-form";
import AdminLayout from "../components/Layouts/AdminLayout";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../components/Elements/Input";
import ActionButton from "../components/Elements/ActionButton";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";
import { axiosInstance } from "../utils/AxiosInstance";

function EditRolePages() {
  const { state } = useLocation();

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { name: state.name },
  });

  const [isSuccesUpdate, setIsSuccesUpdate] = useState(false);

  const onSubmit = async (data) => {
    let dataUpdate = {
      id: state.id,
      name: data.name,
    }
    await axiosInstance.put(`/api/v1/role`, dataUpdate,{
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
    <AdminLayout titlePage="Edit Role">
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

export default EditRolePages;
