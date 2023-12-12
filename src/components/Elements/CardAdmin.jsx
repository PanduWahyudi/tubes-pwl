import React from "react";

function CardAdmin({ children }) {
  return (
    <div className="bg-white w-4/5 h-[635px] rounded-md py-[26px] px-[32px] ">
      {children}
    </div>
  );
}

export default CardAdmin;
