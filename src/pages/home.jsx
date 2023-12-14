import React from "react";
import Authlayout from "../components/Layouts/Authlayout";
import Button from "../components/Elements/Button";
import InputText from "../components/Elements/InputText";
import { Link } from "react-router-dom";
import EmailInput from "../components/Elements/EmailInput";

function Home() {
  return (
    <div className="">
      <Authlayout height="h-[550px]">
        <div className="flex space-x-4 items-center">
          <div className="flex flex-col ">
            <p className="text-[32px] text-center font-medium">Login</p>
            <EmailInput label="Masukkan email" width="345px" margin="my-8" />
            <InputText
              label="Masukkan password"
              width="345px"
              margin="mt-8 mb-6"
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
          </div>

          <div className="w-[1px] bg-black h-[450px]"></div>
          <div className="flex flex-col space-y-4">
            <p className="text-[32px] text-center font-medium">
              Anda Belum Memiliki Akun ?
            </p>

            <div className="flex justify-center">
              <Button
                variant="bg-[#6B240C] rounded-md"
                lebar="w-[180px]  "
                type="button"
              >
                Belum
              </Button>
            </div>
          </div>
        </div>
      </Authlayout>
    </div>
  );
}

export default Home;
