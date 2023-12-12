/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import FormCard from "../Fragments/FormCard";
import Form from "../Fragments/Form";
import Input from "../Elements/Input";
import VisibleIcon from "../Elements/Icon/VisibleIcon";
import InvisibleIcon from "../Elements/Icon/InvisibleIcon";

function LoginLayout() {
  const [hide, setHide] = useState(true);
  return (
    <FormCard lebar="w-[700px]" pading="p-4" tinggi="h-[500px]">
      <div className="flex space-x-5">
        <Form label="Login" type="submit" spasi="space-y-2" isi="Login">
          <Input
            label="Masukkan Email"
            type="email"
            name="email"
            placeholder="Masukkan Email"
            atur="w-[350px] p-2"
          />
          <div className="flex justify-center items-center">
            <Input
              label="Masukkan Password"
              htmlFor="password"
              id="password"
              type={hide ? "password" : "text"}
              name="password"
              placeholder="Masukkan Password"
              atur="w-[350px] p-2 "
            />
            <button
              className="absolute right-[49.3%] mt-[23px]"
              onClick={() => setHide(!hide)}
            >
              <VisibleIcon visible={hide ? "" : "hidden"} />
              <InvisibleIcon invisible={hide ? "hidden" : ""} />
            </button>
          </div>
          <a href="" className="ml-60">
            Lupa Password
          </a>
        </Form>
        <div className="w-[1px] h-[450px] bg-black"></div>
        <Form
          label="Anda belum memiliki akun?"
          type="button"
          isi="Buat"
          spasi="space-y-2"
        ></Form>
      </div>
    </FormCard>
  );
}

export default LoginLayout;
