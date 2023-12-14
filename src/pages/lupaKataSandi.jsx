import Authlayout from "../components/Layouts/Authlayout";
import EmailInput from "../components/Elements/EmailInput";
import Button from "../components/Elements/Button";

function ForgetPassword() {
  return (
    <Authlayout height="h-[300px]">
      <div className=" flex flex-col justify-center items-center">
        <p className="text-[32px] text-center font-medium">Lupa Password</p>
        <div className=" flex flex-col  space-y-10 mt-4">
          <EmailInput
            label="Masukkan Email"
            type="email"
            width="500px"
            margin="mt-8 mb-4"
          />

          <div className=" flex justify-center ">
            <Button
              variant="bg-[#6B240C] rounded-md"
              lebar="w-[180px]  "
              type="submit"
            >
              Kirim Password
            </Button>
          </div>
        </div>
      </div>
    </Authlayout>
  );
}

export default ForgetPassword;
