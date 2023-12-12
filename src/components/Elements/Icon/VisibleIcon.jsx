/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
function VisibleIcon(props) {
  const { visible } = props;
  return (
    <svg
      className={`${visible}`}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M2.5 15C2.5 15 6.25 6.25 15 6.25C23.75 6.25 27.5 15 27.5 15C27.5 15 23.75 23.75 15 23.75C6.25 23.75 2.5 15 2.5 15Z"
        stroke="#8B8B8B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z"
        stroke="#8B8B8B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default VisibleIcon;
