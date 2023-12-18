import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";
import AdminLayout from "../components/Layouts/AdminLayout";
import Input from "../components/Elements/Input";
import ActionButton from "../components/Elements/ActionButton";
import { axiosInstance } from "../utils/AxiosInstance";

function EditRackPages() {
  const { state } = useLocation();

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { name: state.name },
  });

  const [isSuccesUpdate, setIsSuccesUpdate] = useState(false);

  const onSubmit = async (data) => {
    const dataUpdate = {
      id: state.id,
      name: data.name,
    };
    await axiosInstance.put(`/api/v1/rack`, dataUpdate, {
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

    navigate("/rack");
  };

  return (
    <AdminLayout titlePage="Edit Rack">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-8">
          <Input
            type="text"
            label="Nama Item"
            placeholder="Nama Item"
            propsRegis={{
              ...register("name", {
                required: "Please enter your item.",
              }),
            }}
          />

          <div className="mt-10 flex justify-end">
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

export default EditRackPages;
