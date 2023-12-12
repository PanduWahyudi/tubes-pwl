/* eslint-disable no-unused-vars */
import FormCard from "../Fragments/FormCard";
import Form from "../Fragments/Form";
import Input from "../Elements/Input";
import SucsessPopUp from "../Fragments/SucsessPopUp";
import { useState } from "react";

function OtpLayout() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <FormCard lebar="w-[700px]" pading="p-10" tinggi="h-[300px] ">
      <Form
        label="Kode OTP"
        isi="Kirim Kode OTP"
        spasi="space-y-6"
        onClick={openPopup}
      >
        <Input
          label="Masukkan OTP"
          type="password"
          name="otp"
          placeholder="Masukkan OTP"
          atur="w-[500px] p-2 flex flex-col"
        />
        {isPopupOpen && <SucsessPopUp>Congratulations!</SucsessPopUp>}
      </Form>
    </FormCard>
  );
}

export default OtpLayout;
