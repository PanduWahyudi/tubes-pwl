import React from "react";
import AdminLayout from "../components/Layouts/AdminLayout";
import Input from "../components/Elements/Input";
import { useForm } from "react-hook-form";
import ActionButton from "../components/Elements/ActionButton";

function AddUserPages() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { name: "", email: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: "", email: "" });
    }
  }, [formState, reset]);

  const opsi = [
    { id: 0, value: "", label: "Pilih Role" },
    { id: 1, value: "admin", label: "Admin" },
    { id: 2, value: "user", label: "User" },
    { id: 3, value: "umum", label: "Umum" },
  ];

  return (
    <AdminLayout titlePage="Tambah Pengguna">
      <div className="flex flex-col">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="Nama Pengguna"
            placeholder="Nama Pengguna"
            propsRegis={{
              ...register("name", {
                required: "Please enter your name.",
              }),
            }}
          />
          <div className="mt-2 flex space-x-4 items-center">
            <div className="flex flex-col space-y-1">
              <p className="text-[24px] font-normal">Email</p>
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: "Please enter your email.",
                })}
                placeholder="Masukkan Email"
                className="bg-white h-10 px-4 rounded-md  focus:outline-none border border-[#8B8B8B] w-96 text-[16px] focus:ring-[#8B8B8B] focus:border-[#8B8B8B] "
              />
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-[24px] font-normal"> Role</p>
              <select
                id="countries"
                className=" border border-[#8B8B8B] text-gray-900 text-sm rounded-lg focus:outline-none focus:visible focus:ring-[#8B8B8B] focus:border-[#8B8B8B] block w-64 p-2.5 
      mt-2"
              >
                {opsi.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-2 flex justify-end">
            <ActionButton teks="Simpan" lebar="px-4 w-30" type="submit" />
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddUserPages;
