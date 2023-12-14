import React from "react";
import Authlayout from "../components/Layouts/Authlayout";
// import EmailInput from "../components/Elements/EmailInput";
import { useForm } from "react-hook-form";
import Input from "../components/Elements/Input";
import Button from "../components/Elements/Button";
import InputHide from "../components/Elements/InputHide";

function ForgetPassword() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { email: "" },
  });
  const onSubmit = (data) => console.log(data);
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "" });
    }
  }, [formState, reset]);
  return (
    <Authlayout height="h-[300px]">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col justify-center items-center">
          <div className=" space-y-8   w-full ">
            <p className="text-[32px] text-center font-medium">Lupa Password</p>
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

            <div className=" flex justify-center ">
              <Button
                variant="bg-[#6B240C] rounded-md"
                lebar="w-[180px]  "
                type="submit"
              >
                Kirim Password
              </Button>
              {/* <input type="submit" /> */}
              {/* <button type="submit">Sub</button> */}
            </div>
          </div>
        </div>
      </form>
    </Authlayout>
  );
}

export default ForgetPassword;
