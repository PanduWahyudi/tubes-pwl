import React from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import InputText from "../components/Elements/InputText";
import SelectInput from "../components/Elements/SelectInput";
import ActionButton from "../components/Elements/ActionButton";

function CreateItemPages() {
  const tesClick = () => {
    console.log("Tes");
  };

  return (
    <AdminLayout titlePage="Tambah Item">
      <div className="flex flex-col">
        <InputText label="Masukkan Item" width="900px" margin="my-6" />
        <p className="mt-4 text-[24px] font-normal">Kategori</p>
        <SelectInput />
        <div className="mt-2 flex justify-end">
        <ActionButton
          teks="Simpan"
          lebar="px-4 w-30"
          type="button"
          oncClick={tesClick}
        />
        </div>
      </div>
    </AdminLayout>
  );
}

export default CreateItemPages;
