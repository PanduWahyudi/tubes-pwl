
import TrashIcon from "./Icon/TrashIcon";

// eslint-disable-next-line react/prop-types
function DeleteButton({ onClick }) {
  return (
    <button
      className="flex justify-center items-center bg-[#DA3F3F] rounded-md p-[3px]"
      type="button"
      onClick={onClick}
    >
      <TrashIcon />
    </button>
  );
}

export default DeleteButton;
