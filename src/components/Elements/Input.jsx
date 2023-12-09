/* eslint-disable react/prop-types */

function Input({
  type = "",
  placeholder = "",
  name = "",
  className = "",
  ...restProps
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={`border rounded border-[#8B8B8B] py-2 ${className}`}
      {...restProps}
    />
  );
}

export default Input;
