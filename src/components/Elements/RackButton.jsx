import React from "react";
import NameRackIcon from "./Icon/NameRackIcon";

function RackButton({ onClick }) {
  return (
    <button
      className="flex justify-center items-center bg-[#E48F45] rounded-md p-[3px]"
      type="button"
      onClick={onClick}
    >
      <NameRackIcon />
    </button>
  );
}

export default RackButton;
