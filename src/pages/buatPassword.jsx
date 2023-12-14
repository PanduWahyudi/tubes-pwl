import React from "react";
import { useState } from "react";
import Authlayout from "../components/Layouts/Authlayout";
import { useForm } from "react-hook-form";
import Button from "../components/Elements/Button";
import InputHide from "../components/Elements/InputHide";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";

function NewPassword() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { password: "", newPassword: "" },
  });
  const [isSuccesModalOpen, setIsSuccesModalOpen] = useState(false);

  const closeSuccesModal = () => {
    setIsSuccesModalOpen(false);
  };

  const onSubmit = (data) => {
    setIsSuccesModalOpen(true);
    console.log(data);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ password: "", newPassword: "" });
    }
  }, [formState, reset]);
  return (
    <Authlayout height="h-auto">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col justify-center items-center">
          <div className=" space-y-8   w-full ">
            <p className="text-[32px] text-center font-medium">
              Buat Password Baru
            </p>
            <InputHide
              className="right-[26.2%] bottom-[44.5%]"
              label="Masukkan Password Baru"
              placeholder="Masukkan Password Baru"
              propsRegis={{
                ...register("password", {
                  required: "Please enter your password.",
                }),
              }}
            />
            <InputHide
              className="right-[26.2%] bottom-[31.8%]"
              label="Masukkan Ulang Password Baru"
              placeholder="Masukkan Ulang Password Baru"
              propsRegis={{
                ...register("newPassword", {
                  required: "Please enter your password.",
                }),
              }}
            />

            <div className=" flex justify-center ">
              <Button
                variant="bg-[#6B240C] rounded-md"
                lebar="w-[180px]  "
                type="submit"
              >
                Ubah Password
              </Button>

              {isSuccesModalOpen && (
                <SucsessPopUp
                  onClick={closeSuccesModal}
                  type="button"
                  teks="Passwword Berhasil Diubah"
                />
              )}
              {/* <input type="submit" /> */}
              {/* <button type="submit">Sub</button> */}
            </div>
          </div>
        </div>
      </form>
    </Authlayout>
  );
}

export default NewPassword;
