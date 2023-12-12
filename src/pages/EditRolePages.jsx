import React from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import InputText from "../components/Elements/InputText";
import ActionButton from "../components/Elements/ActionButton";

function EditRolePages() {
  const tesClick = () => {
    console.log("Tes");
  };

  return (
    <AdminLayout titlePage="Edit Role">
      <form action="flex flex-col space-y-10">
        <div className="">
          <InputText label="Nama Role" width="1000px" margin="my-6" />

          <div className="mt-10 flex justify-end">
            <ActionButton
              teks="Ubah"
              lebar="px-4 w-30"
              type="button"
              oncClick={tesClick}
            />
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}

export default EditRolePages;
