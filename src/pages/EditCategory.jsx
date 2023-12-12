import React from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import InputText from "../components/Elements/InputText";
import ActionButton from "../components/Elements/ActionButton";

function EditCategoryPages() {
  const tesClick = () => {
    console.log("Tes");
  };

  return (
    <AdminLayout titlePage="Edit Kategori">
      <div className="flex flex-col">
        <InputText label="Masukkan Kategori" width="1000px" margin="my-6" />
        <div className="mt-2 flex justify-end">
          <ActionButton
            teks="Ubah"
            lebar="px-4 w-30"
            type="button"
            oncClick={tesClick}
          />
        </div>
      </div>
    </AdminLayout>
  );
}

export default EditCategoryPages;
