/* eslint-disable react/prop-types */
import LabelForm from "../Elements/LabelForm";
import Button from "../Elements/Button.Jsx";

function Form({ children, label, type, isi, spasi, onClick }) {
  return (
    <div className={`flex flex-col  items-center justify-center ${spasi}  `}>
      {label && <LabelForm>{label}</LabelForm>}
      {children}
      <Button type={type} variant="bg-[#6B240C] shadow-md rounded-md" lebar="w-40 " onClick={onClick}>
        {isi}
      </Button>
    </div>
  );
}

export default Form;
