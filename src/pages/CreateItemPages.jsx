import React from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import { useForm } from "react-hook-form";
import SelectInput from "../components/Elements/SelectInput";
import ActionButton from "../components/Elements/ActionButton";
import Input from "../components/Elements/Input";

function CreateItemPages() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { item: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ item: "" });
    }
  }, [formState, reset]);

  return (
    <AdminLayout titlePage="Tambah Item">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <Input
            type="text"
            label="Nama Item Item"
            placeholder="Nama Item"
            propsRegis={{
              ...register("item", {
                required: "Please enter your item",
              }),
            }}
          />
          <p className="mt-4 text-[24px] font-normal">Kategori</p>
          <SelectInput />
          <div className="mt-2 flex justify-end">
            <ActionButton teks="Simpan" lebar="px-4 w-30" type="submit" />
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}

export default CreateItemPages;
