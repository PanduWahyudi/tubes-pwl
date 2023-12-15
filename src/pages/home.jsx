import React from "react";
import { useState } from "react";
import Authlayout from "../components/Layouts/Authlayout";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputHide from "../components/Elements/InputHide";
import IncorrectPasswordPopUP from "../components/Fragments/IncorretPasswordPopUp";

function Home() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data) => {
    if (data.email != "admin@gmail.com " && data.password != "admin") {
      setIsModalOpen(true);
    } else {
      navigate("/item");
    }
  };
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "", password: "" });
    }
  }, [formState, reset]);

  return (
    <div className="">
      <Authlayout height="h-[550px]">
        <div className="flex space-x-10 items-center ">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-4  w-80 ">
              <p className="text-[32px] text-center font-medium">Login</p>
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
              <InputHide
                className="bottom-[36%] left-[47.6%]"
                label="Masukkan Password"
                placeholder="Masukkan Password"
                propsRegis={{
                  ...register("password", {
                    required: "Please enter your first name.",
                  }),
                }}
              />
              <div className="flex justify-end">
                <Link to="/lupa-kata-sandi">Lupa Password</Link>
              </div>
              <div className=" flex justify-center mt-4">
                <Button
                  variant="bg-[#6B240C] rounded-md"
                  lebar="w-[180px]  "
                  type="submit"
                >
                  Login
                </Button>
              </div>
              {isModalOpen && (
                <IncorrectPasswordPopUP
                  onClick={closeModal}
                  type="button"
                  teks="Password Salah"
                />
              )}
            </div>
          </form>

          <div className="w-[1px] bg-black h-[450px]"></div>
          <div className="flex flex-col space-y-4">
            <p className="text-[32px] text-center font-medium">
              Anda Belum Memiliki Akun ?
            </p>

            <div className="flex justify-center">
              <Link
                to="/buat-akun"
                className="w-[180px] bg-[#6B240C] py-2 text-center text-white rounded-md "
              >
                Buat Akun
              </Link>
            </div>
          </div>
        </div>
      </Authlayout>
    </div>
  );
}

export default Home;
