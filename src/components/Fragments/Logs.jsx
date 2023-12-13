import React from "react";
import LogsIcon from "../Elements/Icon/LogsIcon";

function Logs({ type, onClick }) {
  return (
    <button
      className="flex items-center space-x-3"
      type={type}
      onClick={onClick}
    >
      <LogsIcon />

      <p>Logs</p>
    </button>
  );
}

export default Logs;
