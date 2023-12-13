import React from "react";
import Button from "../Elements/Button.Jsx";
import WarningIcon from "../Elements/Icon/WarningIcon";

function IncorrectPasswordPopUp(props) {
  const { teks, onClick, type } = props;
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center first-letter ">
      {/* Backdrop atau overlay */}
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-30 z-10"></div>

      <div className="rounded-md bg-white flex flex-col space-y-6 items-center p-5 w-[400px] height-[300px] relative z-20">
        <WarningIcon/>
        <p className="font-medium text-[24px] text-center ">{teks}</p>
        <div className="flex space-x-2">
          <Button
            variant="bg-[#992A2A] shadow-md rounded-xl"
            type={type}
            lebar="w-[82px] h-[42px]"
            onClick={onClick}
          >
            Ok
          </Button>
        </div>
      </div>
    </div>
  );
}

export default IncorrectPasswordPopUp;
