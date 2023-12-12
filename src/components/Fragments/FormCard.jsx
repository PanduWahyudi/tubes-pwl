function FormCard(props) {
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
