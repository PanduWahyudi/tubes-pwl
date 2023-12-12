import React from "react";
import TrashIcon from "./Icon/TrashIcon";

function DeleteButton({ onClick }) {
  return (
    <button
      className="flex justify-center items-center bg-[#DA3F3F] rounded-md p-[3px]"
      type="button"
      onClick={onClick}
    >
      <TrashIcon />
    </button>
  );
}

export default DeleteButton;
