import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authlayout from "../components/Layouts/Authlayout";
import { useForm } from "react-hook-form";
import Helper from "../components/Elements/Helper";
import Input from "../components/Elements/Input";
import Button from "../components/Elements/Button";

function SendOtp() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { otp: " " },
  });

  const navigate = useNavigate();

  const [isHelper, setIsHelper] = useState(false);

  const onSubmit = (data) => {
    navigate("/ubah-password");
    setIsHelper(true)
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

export default SendOtp;
