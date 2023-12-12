/* eslint-disable react/prop-types */

function Input({
  type = "",
  placeholder = "",
  name = "",
  atur = "",
  label,
  acuan,
  ...restProps
}) {
  return (
    <div>
      {label && (
        <label htmlFor={acuan} className="text-[14px]  text-[#8B8B8B] text-300">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`border rounded border-[#8B8B8B]  py-2 ${atur}`}
        {...restProps}
      />
    </div>
  );
}

export default Input;
