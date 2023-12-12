/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Label(props) {
  const { acuan, children } = props;
  return (
    <label htmlFor={acuan} className="text-[14px]  text-[#8B8B8B] text-300">
      {children}
    </label>
  );
}

export default Label;
