// eslint-disable-next-line no-unused-vars
import React from "react";
import ProductIcon from "../../Elements/Icon/ProductIcon";

function Product() {
  return (
    <div className="flex items-center space-x-3">
      <ProductIcon />
      <p className="text-[14px] font-normal"> Produk</p>
    </div>
  );
}

export default Product;
