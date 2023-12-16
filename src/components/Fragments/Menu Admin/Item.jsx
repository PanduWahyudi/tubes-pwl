// eslint-disable-next-line no-unused-vars
import React from "react";
import ItemsIcon from "../../Elements/Icon/ItemsIcon";

function Item() {
  return (
    <div className="flex items-center space-x-3">
      <ItemsIcon />
      <p className="text-[14px] font-normal"> Item</p>
    </div>
  );
}

export default Item;
