import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminLayout from "../components/Layouts/AdminLayout";
import Input from "../components/Elements/Input";
import { useForm } from "react-hook-form";
import ActionButton from "../components/Elements/ActionButton";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";
import useSWR from "swr";
import { axiosInstance } from "../utils/AxiosInstance";

function EsitUserPages() {
  const {state} = useLocation();

  const opsi = [];

  const { data: dataRole } = useSWR(`/api/v1/role`, (url) =>
    axiosInstance
      .get(url, {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => res.data)
  );

  dataRole?.map((item) => {
    opsi.push(item);
  });

  const [isSuccesUpdate, setIsSuccesUpdate] = useState(false);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { name: state.name, email: state.email, role_id: state.role_id },
  });

  const [selectedOption, setSelectedOption] = useState("");

  const onSubmit = async (data) => {
    let dataUpdate = {
      id: state.id,
      name: data.name,
      email: data.email,
      role_id: parseInt(data.role_id),
    }
    await axiosInstance.put(`/api/v1/user`, dataUpdate,{
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    setIsSuccesUpdate(true);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: "", email: "", role_id: "" });
    }
  }, [formState, reset]);

  const navigate = useNavigate();

  const closeSuccesUpdate = () => {
    setIsSuccesUpdate(false);

    navigate("/pengguna");
  };

  return (
    <AdminLayout titlePage="Edit Pengguna">
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
                id="role_id"
                {...register("role_id")}
                onChange={(e) => setSelectedOption(e.target.value)}
                className=" border border-[#8B8B8B] text-gray-900 text-sm rounded-lg focus:outline-none focus:visible focus:ring-[#8B8B8B] focus:border-[#8B8B8B] block w-64 p-2.5 
      mt-2"
              >
                {opsi.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-2 flex justify-end">
            <ActionButton teks="Ubah" lebar="px-4 w-30" type="submit" />
          </div>

          {isSuccesUpdate && (
            <SucsessPopUp
              onClick={closeSuccesUpdate}
              type="button"
              teks="Data Tersimpan"
            />
          )}
        </form>
      </div>
    </AdminLayout>
  );
}

export default EsitUserPages;
