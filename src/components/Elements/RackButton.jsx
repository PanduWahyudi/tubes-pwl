import NameRackIcon from "./Icon/NameRackIcon";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function RackButton({ to }) {
  return (
    <Link
      to={to}
      className="flex justify-center items-center bg-[#E48F45] rounded-md p-[3px]"
    >
      <NameRackIcon />
    </Link>
  );
}

export default RackButton;
