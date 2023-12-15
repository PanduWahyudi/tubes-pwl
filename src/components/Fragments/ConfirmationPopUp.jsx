import WarningIcon from "../Elements/Icon/WarningIcon";
import Button from "../Elements/Button.Jsx";

function ConfirmationPopUP(props) {
  // eslint-disable-next-line react/prop-types
  const { teks, Ok, Cancel, type } = props;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center first-letter z-[99] ">
      {/* Backdrop atau overlay */}
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-30 z-10"></div>

      <div className="rounded-md bg-white flex flex-col space-y-6 items-center p-5 w-[400px] height-[300px] relative z-20">
        <WarningIcon />
        <p className="font-medium text-[24px] text-center ">{teks}</p>
        <div className="flex space-x-2">
          <Button
            variant="bg-[#992A2A] shadow-md rounded-xl"
            type={type}
            lebar="w-[82px] h-[42px]"
            onClick={Ok}
          >
            Ya
          </Button>
          <Button
            variant="bg-[#6B240C] shadow-md rounded-xl cursor-pointer"
            type={type}
            lebar="w-[82px] h-[42px]"
            onClick={Cancel}
          >
            Tidak
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPopUP;
