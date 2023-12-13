import React from "react";
import CrossIcon from "./Icon/CrossIcon";

function ClosePopUpLogsButton(props) {
  const { type, onClick } = props;
  return (
    <button type={type} onClick={onClick}>
      <CrossIcon />
    </button>
  );
}

export default ClosePopUpLogsButton;
