/* eslint-disable react/prop-types */
import LabelForm from "../Elements/LabelForm";
import Button from "../Elements/Button.Jsx";

function Form({ children, label }) {
  return (
    <div className="flex flex-col space-y-12 items-center justify-center mb-4  ">
      {label && <LabelForm>{label}</LabelForm>}
      {children}
      <Button variant="bg-[#6B240C]" lebar="w-40">
        Kirim
      </Button>
    </div>
  );
}

export default Form;
