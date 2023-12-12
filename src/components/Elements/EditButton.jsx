import React from "react";
import EditIcon from "./Icon/EditIcon";

function EditButton({ onClick }) {
  return (
    <button
      className="flex justify-center items-center bg-[#E48F45] rounded-md p-[3px]"
      type="button"
      onClick={onClick}
    >
      <EditIcon />
    </button>
  );
}

export default EditButton;
