import React from "react";
import Logs from "./Logs";
import NameAdmin from "./NameAdmin";

function HeaderAdmin() {
  return (
    <div>
      <div className="flex justify-between">
        <NameAdmin />
        <Logs />
      </div>
    </div>
  );
}

export default HeaderAdmin;
