/* eslint-disable no-unused-vars */
import React from "react";

function Logo(props) {
  const { percentLeft } = props;
  return (
    <div className="flex justify-end items-center shadow-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="84"
        viewBox="0 0 72 84"
        fill="none"
      >
        <path
          d="M1 33.2842V78C1 80.7614 3.23858 83 6 83H66C68.7614 83 71 80.7614 71 78V33.2327C71 31.8456 70.4238 30.5209 69.4092 29.5752L39.9576 2.12313C38.0615 0.35579 35.1292 0.33046 33.2029 2.06478L2.6545 29.5684C1.60134 30.5166 1 31.8671 1 33.2842Z"
          stroke="white"
        />
      </svg>
      <p
        className={`font-[' Montserrat'] text-[60px] font-[500]  text-white ${percentLeft} mt-6 absolute text-stroke`}
      >
        W
      </p>
    </div>
  );
}

export default Logo;
