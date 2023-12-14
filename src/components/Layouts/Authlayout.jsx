/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../Elements/Logo";

function Authlayout({ children, height }) {
  return (
    <div className="backgroundImage">
      <div className="flex flex-col justify-center items-center h-screen p-2">
        <Logo />
        <div className={`bg-white w-[700px] rounded-md p-[33px] ${height}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Authlayout;
