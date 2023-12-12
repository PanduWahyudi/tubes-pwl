import React from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import InputText from "../components/Elements/InputText";
import ActionButton from "../components/Elements/ActionButton";
import DateInput from "../components/Elements/DateInput";

function EditIncomingGoodPages() {
  const tesClick = () => {
    console.log("Tes");
  };

  return (
    <AdminLayout titlePage="Edit Barang Masuk">
      <div className="flex flex-col">
        <InputText label="Nama Item" width="1000px" margin="my-6" />

        <div className="mt-2">
          <form action="" className="flex space-x-4 items-center">
            <div className="flex flex-col space-y-1">
              <p className="text-[24px] font-normal">Tanggal Masuk</p>
              <DateInput />
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-[24px] font-normal"> Supplier ID </p>
              <input
                type="text"
                name="suplier"
                placeholder="Supplier Id"
                className="bg-white h-10 px-4 rounded-md  focus:outline-none border border-[#8B8B8B] w-64 text-[16px]  "
              />
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-[24px] font-normal"> Qty</p>
              <input
                type="number"
                name="qty"
                placeholder="Qty"
                className="bg-white h-10 px-4 rounded-md  focus:outline-none border border-[#8B8B8B] w-64 text-[16px] "
              />
            </div>
          </form>
        </div>

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

export default EditIncomingGoodPages;
