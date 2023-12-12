/* eslint-disable react/prop-types */

function Button(props) {
  const { variant, lebar, children, type, onClick } = props;
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${variant} py-2 text-center text-white   ${lebar} `}
    >
      {children}
    </button>
  );
}

export default Button;
