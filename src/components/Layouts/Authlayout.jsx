/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../Elements/Logo";

function Authlayout({ children }) {
  return (
    <div className="backgroundImage">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex">
          <Logo percentLeft="left-[40.4%]" />
          <p className="mt-6 font-[' Montserrat'] text-[48px] font-normal text-white">
            arehouse
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Authlayout;
