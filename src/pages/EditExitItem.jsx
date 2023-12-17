import React from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Elements/Input";
import { useForm } from "react-hook-form";
import ActionButton from "../components/Elements/ActionButton";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";

function EditExitItem() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { item: "", date: "", supplierId: "", qty: 0 },
  });

  const [isSuccesUpdate, setIsSuccesUpdate] = useState(false);

  const onSubmit = (data) => {
    setIsSuccesUpdate(true);
    console.log(data);
  };
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ item: "", date: "", supplierId: "", qty: 0 });
    }
  }, [formState, reset]);

  const navigate = useNavigate();

  const closeSuccesUpdate = () => {
    setIsSuccesUpdate(false);

    navigate("/barang-keluar");
  };

  return (
    <AdminLayout titlePage="Edit Barang Keluar">
      <div className="flex flex-col">
        <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="Nama Item"
            placeholder="Nama Item"
            propsRegis={{
              ...register("item", {
                required: "Please enter your item",
              }),
            }}
          />

          <div className="mt-2 flex space-x-4 items-center">
            <div className="flex flex-col space-y-1 ">
              <p className="text-[24px] font-normal">Tanggal Masuk</p>
              <input
                className="border border-[#8B8B8B] text-gray-900 text-md rounded-lg  focus:border-[#8B8B8B] focus:ring-[#8B8B8B] block w-40  red-500  focus:outline-none  "
                type="date"
                {...register("date")}
              />
            </div>

            <div className="flex flex-col space-y-1">
              <p className="text-[24px] font-normal"> Supplier ID </p>
              <input
                type="text"
                name="suplier"
                placeholder="Supplier Id"
                className="bg-white h-10 px-4 rounded-md  focus:outline-none border border-[#8B8B8B] w-64 text-[16px] focus:ring-[#8B8B8B] focus:border-[#8B8B8B] "
                {...register("supplierId")}
              />
            </div>

            <div className="flex flex-col space-y-1">
              <p className="text-[24px] font-normal"> Qty</p>
              <input
                type="number"
                {...register("qty", {
                  min: 0,
                })}
                name="qty"
                placeholder="Masukkan Jumlah"
                className="bg-white h-10 px-4 rounded-md  focus:outline-none border border-[#8B8B8B] w-64 text-[16px] focus:ring-[#8B8B8B] focus:border-[#8B8B8B]  "
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <ActionButton teks="Simpan" lebar="px-4 w-30" type="submit" />
          </div>
        </form>
        {isSuccesUpdate && (
          <SucsessPopUp
            onClick={closeSuccesUpdate}
            type="button"
            teks="Data Tersimpan"
          />
        )}
      </div>
    </AdminLayout>
  );
}

export default EditExitItem;
