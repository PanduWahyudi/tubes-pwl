import React from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import InputText from "../components/Elements/InputText";
import ActionButton from "../components/Elements/ActionButton";
import SelectInput from "../components/Elements/SelectInput";

function AddUserPages() {
  const tesClick = () => {
    console.log("Tes");
  };

  return (
    <AdminLayout titlePage="Tambah Pengguna">
      <div className="flex flex-col">
        <InputText label="Nama Penguna" width="1000px" margin="my-6" />

        <div className="mt-2">
          <form action="" className="flex space-x-4 items-center">
            <div className="flex flex-col space-y-1">
              <p className="text-[24px] font-normal">Email</p>
              <input
                type="email"
                name="email"
                placeholder="Supplier Id"
                className="bg-white h-10 px-4 rounded-md  focus:outline-none border border-[#8B8B8B] w-[370px] text-[16px]  "
              />
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-[24px] font-normal"> Role</p>
              <SelectInput />
            </div>
          </form>
        </div>

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

export default AddUserPages;
