import VisibleIcon from "./Icon/VisibleIcon";
import InvisibleIcon from "./Icon/InvisibleIcon";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function InputHide({ placeholder, propsRegis, label, className }) {
  const [hide, setHide] = useState();
  return (
    <div className="relative">
      <div className="relative">
        <input
          type={hide ? "password" : "text"}
          id="floating_outlined"
          className="block px-2.5 pb-2.5 pt-4 w-full text-[14px] text-gray-900 bg-transparent rounded-lg border-1 border-[#8B8B8B] appearance-none   focus:outline-none focus:ring-[#8B8B8B] focus:border-[#8B8B8B] peer"
          placeholder={placeholder}
          {...propsRegis}
        />
        <label
          htmlFor="floating_outlined"
          className="absolute text-[14px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#8B8B8B]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {label}
        </label>
      </div>
      <a onClick={() => setHide(!hide)} className={`absolute ${className}`}>
        {hide ? <InvisibleIcon /> : <VisibleIcon />}
      </a>
    </div>
  );
}

export default InputHide;
