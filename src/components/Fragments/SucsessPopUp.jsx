/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ChecklistIcon from "../Elements/Icon/ChecklistIcon";
import Button from "../Elements/Button.Jsx";

function SucsessPopUp(props) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
          <div className="rounded-md bg-white flex flex-col space-y-6 items-center p-5 w-[400px]">
            <ChecklistIcon percentPosition="left-[47%]" />
            <Button
              variant="bg-red-700 shadow-md rounded-xl"
              type="button"
              lebar="w-[82px] h-[42px]"
              onClick={closePopup}
            >
              Ok
            </Button>
            <p className="font-500 text-[34px] ">{children}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default SucsessPopUp;
