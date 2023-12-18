import React from "react";
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Authlayout from "../components/Layouts/Authlayout";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputHide from "../components/Elements/InputHide";
import IncorrectPasswordPopUP from "../components/Fragments/IncorretPasswordPopUp";
import Helper from "../components/Elements/Helper";
import { axiosInstance } from "../utils/AxiosInstance";


function Home() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHelper, setIsHelper] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data) => {
    // if (data.email !== "admin@gmail.com " && data.password !== "admin") {
    //   setIsHelper(true);
    //   setIsModalOpen(true);
    // } else {
    //   navigate("/item");
    // }
    await axiosInstance.post(`/api/v1/login`, data, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    }).then((res) => {
      localStorage.setItem("token", res.data.token);
      navigate("/item", { state : { data : res.data } });
    }).catch((err) => {
      if(err.response.status === 400){
        // setIsHelper(true);
        setIsModalOpen(true);
      }
    })
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "", password: "" });
    }
  }, [formState, reset]);

  return (
    <Authlayout height="h-[550px]">
      <div className="flex space-x-10 items-center ">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <div className="flex flex-col space-y-6  w-80 ">
              <p className="text-[32px] text-center font-medium">Login</p>
              <Input
                type="text"
                label="Masukkan email"
                placeholder="Masukkan email"
                propsRegis={{
                  ...register("email"),
                }}
              />
              <InputHide
                className="right-1 bottom-2"
                label="Masukkan Password"
                placeholder="Masukkan Password"
                propsRegis={{
                  ...register("password"),
                }}
              />
              {/* <div className="flex justify-end">
                <Link to="/lupa-kata-sandi">Lupa Password</Link>
              </div> */}
              <div className=" flex justify-center mt-4">
                <Button
                  variant="bg-[#6B240C] rounded-md"
                  lebar="w-[180px]  "
                  type="submit"
                >
                  Login
                </Button>
              </div>
              <Helper hide={!isHelper ? "hidden" : ""}>
                Masukkan Data yang diperlukan
              </Helper>
              {isModalOpen && (
                <IncorrectPasswordPopUP
                  onClick={closeModal}
                  type="button"
                  teks="Login Gagal"
                />
              )}
            </div>
          </motion.div>
        </form>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-[1px] bg-black h-[450px]"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
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
        </motion.div>
      </div>
    </Authlayout>
  );
}

export default Home;
