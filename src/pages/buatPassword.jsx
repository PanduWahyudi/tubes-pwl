/* eslint-disable no-unused-vars */
import React from "react";
import Authlayout from "../components/Layouts/Authlayout";
import InputText from "../components/Elements/InputText";
import Button from "../components/Elements/Button";


function NewPassword() {
  return (
    <Authlayout height="h-[322px]">
      <div className=" flex flex-col  items-center">
        <p className="text-[32px] text-center font-medium">
          Buat Password Baru
        </p>
        <div className=" flex flex-col space-y-6">
          <InputText
            label="Masukkan Password Baru"
            width="500px"
            margin="mt-8 mb-10"
          />
          <InputText
            label="Masukkan Ulang Password Baru"
            width="500px"
            margin="mt-8 mb-6"
          />
        </div>
        <div className=" flex justify-center mt-12">
          <Button
            variant="bg-[#6B240C] rounded-md"
            lebar="w-[180px]  "
            type="submit"
          >
            Ubah Password
          </Button>
        </div>
      </div>
    </Authlayout>
  );
}

export default NewPassword;
