// eslint-disable-next-line no-unused-vars
import React from "react";
import CategoryIcon from "../../Elements/Icon/CategoryIcon";

function Category() {
  return (
    <div className="flex items-center space-x-3">
      <CategoryIcon />
      <p className="text-[14px] font-normal"> Kategori</p>
    </div>
  );
}

export default Category;
