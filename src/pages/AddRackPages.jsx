import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";
import AdminLayout from "../components/Layouts/AdminLayout";
import Input from "../components/Elements/Input";
import ActionButton from "../components/Elements/ActionButton";

function AddRackPages() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { rack: "" },
  });

  const [isSuccesUpdate, setIsSuccesUpdate] = useState(false);

  const onSubmit = (data) => {
    setIsSuccesUpdate(true);
    console.log(data);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ rack: "" });
    }
  }, [formState, reset]);

  const navigate = useNavigate();

  const closeSuccesUpdate = () => {
    setIsSuccesUpdate(false);

    navigate("/rack");
  };

  return (
    <AdminLayout titlePage="Tambah Rack">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-8">
          <Input
            type="text"
            label="Nama Item"
            placeholder="Nama Item"
            propsRegis={{
              ...register("rack", {
                required: "Please enter your item.",
              }),
            }}
          />

          <div className="mt-10 flex justify-end">
            <ActionButton teks="Simpan" lebar="px-4 w-30" type="submit" />
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

export default AddRackPages;
