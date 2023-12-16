function ActionButton(props) {
  // eslint-disable-next-line react/prop-types
  const { teks, type, onClick, lebar } = props;
  return (
    <button
      className={`text-center text-white py-[8px] text-[16px] bg-[#6B240C] rounded-md ${lebar} `}
      type={type}
      onClick={onClick}
    >
      {teks}
    </button>
  );
}

export default ActionButton;
