import React from "react";
import { useState } from "react";
import Authlayout from "../components/Layouts/Authlayout";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/Elements/Button";
import InputHide from "../components/Elements/InputHide";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";
import Helper from "../components/Elements/Helper";

function NewPassword() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { password: "", newPassword: "" },
  });
  const [isSuccesModalOpen, setIsSuccesModalOpen] = useState(false);

  const [isHelper, setIsHelper] = useState(false);

  const navigate = useNavigate();

  const closeSuccesModal = () => {
    navigate("/");
    setIsSuccesModalOpen(false);
  };

  const onSubmit = (data) => {
    setIsHelper(true);
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
              className="bottom-2 right-1"
              label="Masukkan Password Baru"
              placeholder="Masukkan Password Baru"
              propsRegis={{
                ...register("password", {
                  required: "Please enter your password.",
                }),
              }}
            />
            <InputHide
              className="bottom-2 right-1"
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
                  teks="Password Berhasil Diubah"
                />
              )}
              {/* <input type="submit" /> */}
              {/* <button type="submit">Sub</button> */}
            </div>
            <Helper hide={!isHelper ? "hidden" : ""}>
              Masukkan Data yang diperlukan{" "}
            </Helper>
          </div>
        </div>
      </form>
    </Authlayout>
  );
}

export default NewPassword;
