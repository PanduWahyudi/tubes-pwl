import React from "react";
import WarningIcon from "../Elements/Icon/WarningIcon";
import Button from "../Elements/Button.Jsx";

function ConfirmationPopUP(props) {
  const { children } = props;

  const handleClick = () => {
    console.log("OK");
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center first-letter ">
      <div className="rounded-md bg-white flex flex-col space-y-6 items-center p-5 w-[400px]">
        <WarningIcon />
        <p className="font-500 text-[34px] text-center ">{children}</p>
        <div className="flex space-x-2">
          <Button
            variant="bg-[#992A2A] shadow-md rounded-xl"
            type="button"
            lebar="w-[82px] h-[42px]"
            onClick={handleClick}
          >
            Ya
          </Button>
          <Button
            variant="bg-[#6B240C] shadow-md rounded-xl"
            type="button"
            lebar="w-[82px] h-[42px]"
            onClick={handleClick}
          >
            Tidak
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPopUP;
