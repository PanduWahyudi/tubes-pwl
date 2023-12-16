/* eslint-disable react/prop-types */


function Helper({ children, hide }) {
  return (
    <p className={`text-[18px] text-[#F00] text-center ${hide}`}>{children}</p>
  );
}

export default Helper;
