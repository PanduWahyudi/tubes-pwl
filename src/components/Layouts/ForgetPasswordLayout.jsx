import FormCard from "../Fragments/FormCard";
import Form from "../Fragments/Form";
import Input from "../Elements/Input";

function ForgetPasswordLayout() {
  return (
    <FormCard lebar="w-[700px]" pading="p-4" tinggi="h-auto">
      <Form label="Lupa Password">
        <Input type="text" name="lupaSandi" placeholder="masukkan sandi" className="w-[500px] p-2"/>
      </Form>
    </FormCard>
  );
}

export default ForgetPasswordLayout;
