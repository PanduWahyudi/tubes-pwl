/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import FormCard from "../Fragments/FormCard";
import Form from "../Fragments/Form";
import Input from "../Elements/Input";
import VisibleIcon from "../Elements/Icon/VisibleIcon";
import InvisibleIcon from "../Elements/Icon/InvisibleIcon";

function CreateAccountLayout() {
  const [hide, setHide] = useState(true);
  const [hide1, setHide1] = useState(true);
  return (
    <div>
      <FormCard lebar="w-[700px]" pading="p-4" tinggi="h-[500px]">
        <div className="flex space-x-5">
          <Form
            spasi="space-y-2"
            label="Anda sudah memiliki akun?"
            type="button"
            isi="Login"
          ></Form>
          <div className="w-[1px] h-[450px] bg-black"></div>
          <Form
            label="Buat Akun"
            type="submit"
            isi="Buat Akun"
            spasi="space-y-2"
          >
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
                className="absolute right-[25%] mt-[23px]"
                onClick={() => setHide(!hide)}
              >
                <VisibleIcon visible={hide ? "" : "hidden"} />
                <InvisibleIcon invisible={hide ? "hidden" : ""} />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <Input
                label="Masukkan Password"
                htmlFor="newPassword"
                id="newPassword"
                type={hide1 ? "password" : "text"}
                name="newPassword"
                placeholder="Masukkan Ulang Password"
                atur="w-[350px] p-2 "
              />
              <button
                className="absolute right-[25%] mt-[23px]"
                onClick={() => setHide1(!hide1)}
              >
                <VisibleIcon visible={hide1 ? "" : "hidden"} />
                <InvisibleIcon invisible={hide1 ? "hidden" : ""} />
              </button>
            </div>
          </Form>
        </div>
      </FormCard>
    </div>
  );
}

export default CreateAccountLayout;
