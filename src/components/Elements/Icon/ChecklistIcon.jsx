/* eslint-disable no-unused-vars */
import React from "react";

function ChecklistIcon(props) {
  // eslint-disable-next-line react/prop-types
  const { percentPosition } = props;
  return (
    <div className="flex justify-start items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
      >
        <circle cx="60" cy="60" r="55" stroke="#00FF47" strokeWidth="10" />
      </svg>

      <svg
        className={` absolute ${percentPosition}`}
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
      >
        <path
          d="M60 19.2L27 52.2L12 37.2"
          stroke="#00FF47"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default ChecklistIcon;
