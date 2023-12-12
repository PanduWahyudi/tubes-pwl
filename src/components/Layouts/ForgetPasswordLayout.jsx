/* eslint-disable no-unused-vars */
import FormCard from "../Fragments/FormCard";
import Form from "../Fragments/Form";
import Input from "../Elements/Input";
import React from "react";

function ForgetPasswordLayout() {
  return (
    <FormCard lebar="w-[700px]" pading="p-10" tinggi="h-[300px] ">
      <Form label="Lupa Password" isi="Kirim" spasi="space-y-6">
        <Input
          label="Masukkan Password"
          type="text"
          name="lupaSandi"
          placeholder="masukkan sandi"
          atur="w-[500px] p-2 flex flex-col"
        />
      </Form>
    </FormCard>
  );
}

export default ForgetPasswordLayout;
