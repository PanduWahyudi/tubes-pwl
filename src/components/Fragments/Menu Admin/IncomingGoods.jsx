import React from "react";
import IncomingGoodsIcon from "../../Elements/Icon/IncomingGoodsIcon";

function IncomingGoods() {
  return (
    <div className="flex items-center space-x-3">
      <IncomingGoodsIcon />
      <p className="text-[14px] font-normal"> Barang Masuk</p>
    </div>
  );
}

export default IncomingGoods;
