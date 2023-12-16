import React from "react";
import { useState } from "react";
import Authlayout from "../components/Layouts/Authlayout";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SucsessPopUp from "../components/Fragments/SucsessPopUp";
import InputHide from "../components/Elements/InputHide";
import Helper from "../components/Elements/Helper";

function CreateAccount() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { email: "", password: "", newPassword: "" },
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
      reset({ email: "", password: "", newPassword: "" });
    }
  }, [formState, reset]);

  return (
    <div className="">
      <Authlayout height="h-auto">
        <div className="flex space-x-10 items-center ">
          <div className="flex flex-col space-y-4">
            <p className="text-[32px] text-center font-medium">
              Anda Sudah Memiliki Akun ?
            </p>

            <div className="flex justify-center">
              <Link
                to="/"
                className="w-[180px] bg-[#6B240C] py-2 text-center text-white rounded-md "
              >
                Login
              </Link>
            </div>
          </div>

          <div className="w-[1px] bg-black h-[450px]"></div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-4  w-80 ">
              <p className="text-[32px] text-center font-medium">Buat Akun</p>
              <Input
                type="text"
                label="Masukkan email"
                placeholder="Masukkan email"
                propsRegis={{
                  ...register("email", {
                    required: "Please enter your email.",
                  }),
                }}
              />
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
                label="Masukkan ulang Password Baru"
                placeholder="Masukkan Ulang Password Baru"
                propsRegis={{
                  ...register("newPassword", {
                    required: "Please enter your password.",
                  }),
                }}
              />
              <div className="flex justify-end"></div>
              <div className=" flex justify-center mt-4">
                <Button
                  variant="bg-[#6B240C] rounded-md"
                  lebar="w-[180px]  "
                  type="submit"
                >
                  Buat Akun
                </Button>

                {isSuccesModalOpen && (
                  <SucsessPopUp
                    onClick={closeSuccesModal}
                    type="button"
                    teks="Akun Berhasil Dibuat"
                  />
                )}
              </div>
              <Helper hide={!isHelper ? "hidden" : ""}>
                Maasukkan Data yang diperlukan{" "}
              </Helper>
            </div>
          </form>
        </div>
      </Authlayout>
    </div>
  );
}

export default CreateAccount;
