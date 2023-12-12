import React from "react";
import LogsIcon from "../Elements/Icon/LogsIcon";

function Logs() {
  return (
    <button className="flex items-center space-x-3">
      <LogsIcon />

      <p>Logs</p>
    </button>
  );
}

export default Logs;
