const FormInput = ({ label, id, ...otherProps }) => {
  return (
    <div className="group">
      <input {...otherProps} id={id} />

      {label && <label for={id}>{label}</label>}
    </div>
  );
};

export default FormInput;
