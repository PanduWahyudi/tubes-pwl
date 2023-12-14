import React from "react";
import { useState } from "react";
import Authlayout from "../components/Layouts/Authlayout";
// import EmailInput from "../components/Elements/EmailInput";
import { useForm } from "react-hook-form";
import Input from "../components/Elements/Input";
import Button from "../components/Elements/Button";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";

function SendOtp() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { otp: " " },
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
      reset({ otp: "" });
    }
  }, [formState, reset]);

  return (
    <Authlayout height="h-[300px]">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col justify-center items-center">
          <div className=" space-y-8   w-full ">
            <p className="text-[32px] text-center font-medium">Kode OTP</p>
            <Input
              type="password"
              label="Masukkan Kode OTP"
              placeholder="Masukkan Kode OTP"
              propsRegis={{
                ...register("otp", {
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
                Kirim Kode OTP
              </Button>

              {isSuccesModalOpen && (
                <SucsessPopUp
                  onClick={closeSuccesModal}
                  type="button"
                  teks="Kode OTP telah dikirim"
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

export default SendOtp;
