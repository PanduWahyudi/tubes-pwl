/* eslint-disable no-unused-vars */
import React from "react";
import Authlayout from "../components/Layouts/Authlayout";
import InputText from "../components/Elements/InputText";
import OtpInput from "../components/Elements/OtpInput";
import Button from "../components/Elements/Button";

function SendOtp() {
  return (
    <Authlayout height="h-[300px]">
      <div className=" flex flex-col justify-center items-center">
        <p className="text-[32px] text-center font-medium">Kode OTP</p>
        <div className=" flex flex-col  space-y-10 mt-4">
          <OtpInput label="Masukkan OTP" width="500px" margin="mt-8 mb-4" />

          <div className=" flex justify-center ">
            <Button
              variant="bg-[#6B240C] rounded-md"
              lebar="w-[180px]  "
              type="submit"
            >
              Kirim Kode OTP
            </Button>
          </div>
        </div>
      </div>
    </Authlayout>
  );
}

export default SendOtp;
