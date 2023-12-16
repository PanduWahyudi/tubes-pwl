import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authlayout from "../components/Layouts/Authlayout";
// import EmailInput from "../components/Elements/EmailInput";
import { useForm } from "react-hook-form";
import Input from "../components/Elements/Input";
import Button from "../components/Elements/Button";
import Helper from "../components/Elements/Helper";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";

function ForgetPassword() {
  const [isSuccesModalOpen, setIsSuccesModalOpen] = useState(false);
  const [isHelper, setIsHelper] = useState(false);
  const navigate = useNavigate();

  const closeSuccesModal = () => {
    navigate("/kode-otp");
    setIsSuccesModalOpen(false);
  };

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { email: "" },
  });
  const onSubmit = (data) => {
    setIsHelper(true);
    setIsSuccesModalOpen(true);
    console.log(data);
  };
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "" });
    }
  }, [formState, reset]);
  return (
    <Authlayout height="h-[300px]">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col justify-center items-center">
          <div className=" space-y-8   w-full py-1  ">
            <p className="text-[32px] text-center font-medium">Lupa Password</p>
            <Input
              type="text"
              label="Masukkan email"
              placeholder="Masukkan email"
              propsRegis={{
                ...register("email", {
                  required: "Please enter your first name.",
                }),
              }}
            />

            <div className=" flex justify-center ">
              <Button
                variant="bg-[#6B240C] rounded-md"
                lebar="w-[180px]  "
                type="submit"
              >
                Kirim
              </Button>
            </div>

            <Helper hide={!isHelper ? "hidden" : ""}>
              Masukkan Data yang diperlukan{" "}
            </Helper>
            {isSuccesModalOpen && (
              <SucsessPopUp
                onClick={closeSuccesModal}
                type="button"
                teks="Kode OTP Telah Dikirim"
              />
            )}
          </div>
        </div>
      </form>
    </Authlayout>
  );
}

export default ForgetPassword;
