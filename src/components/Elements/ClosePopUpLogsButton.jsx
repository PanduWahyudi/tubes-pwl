import CrossIcon from "./Icon/CrossIcon";

function ClosePopUpLogsButton(props) {
  // eslint-disable-next-line react/prop-types
  const { type, onClick } = props;
  return (
    <button type={type} onClick={onClick}>
      <CrossIcon />
    </button>
  );
}

export default ClosePopUpLogsButton;
