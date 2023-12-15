import React from "react";
import { useForm } from "react-hook-form";
import AdminLayout from "../components/Layouts/AdminLayout";
import InputText from "../components/Elements/InputText";
import Input from "../components/Elements/Input";
import ActionButton from "../components/Elements/ActionButton";

function AddRolePages() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { role: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ role: "" });
    }
  }, [formState, reset]);

  return (
    <AdminLayout titlePage="Tambah Role">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-8">
          <Input
            type="text"
            label="Nama Role"
            placeholder="Nama Role"
            propsRegis={{
              ...register("role", {
                required: "Please enter your role.",
              }),
            }}
          />

          <div className="mt-10 flex justify-end">
            <ActionButton teks="Simpan" lebar="px-4 w-30" type="submit" />
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}

export default AddRolePages;