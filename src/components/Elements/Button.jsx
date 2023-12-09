/* eslint-disable react/prop-types */

function Button(props) {
  const { variant, lebar, children } = props;
  return (
    <button
      className={`${variant} py-2 text-center text-white rounded-md ${lebar} `}
    >
      {children}
    </button>
  );
}

export default Button;
