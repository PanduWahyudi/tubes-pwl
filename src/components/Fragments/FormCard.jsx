function FormCard(props) {
  // eslint-disable-next-line react/prop-types
  const { lebar, pading, children, tinggi } = props;
  return (
    <div
      className={`bg-white rounded ${pading} ${lebar} ${tinggi}`}
    >
      {children}
    </div>
  );
}

export default FormCard;
