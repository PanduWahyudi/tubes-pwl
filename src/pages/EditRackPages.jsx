import React from "react";
import { useForm } from "react-hook-form";
import AdminLayout from "../components/Layouts/AdminLayout";
import Input from "../components/Elements/Input";
import ActionButton from "../components/Elements/ActionButton";

function EditRackPages() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { rack: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ rack: "" });
    }
  }, [formState, reset]);

  return (
    <AdminLayout titlePage="Edit Rack">
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
      </form>
    </AdminLayout>
  );
}

export default EditRackPages;
