/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import FormCard from "../Fragments/FormCard";
import Form from "../Fragments/Form";
import Input from "../Elements/Input";
import VisibleIcon from "../Elements/Icon/VisibleIcon";
import InvisibleIcon from "../Elements/Icon/InvisibleIcon";

function NewPasswordLayout() {
  const [hide, setHide] = useState(true);
  const [hide1, setHide1] = useState(true);
  return (
    <FormCard lebar="w-[700px]" pading="p-10" tinggi="h-auto ">
      <Form label="Buat Password Baru" isi="Kirim" spasi="space-y-6" type="submit">
        <div className="flex justify-center items-center">
          <Input
            label="Masukkan Password Baru"
            htmlFor="password"
            id="password"
            type={hide ? "password" : "text"}
            name="password"
            placeholder="Masukkan Password Baru"
            atur="w-[500px] p-2 flex flex-col "
          />
          <button
            className="absolute right-[31.2%] mt-[23px]"
            onClick={() => setHide(!hide)}
          >
            <VisibleIcon visible={hide ? "" : "hidden"} />
            <InvisibleIcon invisible={hide ? "hidden" : ""} />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Input
            label="Masukkan Ulang Password Baru"
            htmlFor="newPassword"
            id="newPassword"
            type={hide1 ? "password" : "text"}
            name="newPassword"
            placeholder="Masukkan Ulang Password Baru"
            atur="w-[500px] p-2 flex flex-col "
          />
          <button
            className="absolute right-[31.2%] mt-[23px]"
            onClick={() => setHide1(!hide1)}
          >
            <VisibleIcon visible={hide1 ? "" : "hidden"} />
            <InvisibleIcon invisible={hide1 ? "hidden" : ""} />
          </button>
        </div>
      </Form>
    </FormCard>
  );
}

export default NewPasswordLayout;
