import React from "react";
import NameRackIcon from "./Icon/NameRackIcon";
import { Link } from "react-router-dom";

function RackButton() {
  return (
    <Link
      to="/rack/item-rack"
      className="flex justify-center items-center bg-[#E48F45] rounded-md p-[3px]"
    >
      <NameRackIcon />
    </Link>
  );
}

export default RackButton;
