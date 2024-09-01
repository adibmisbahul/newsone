const Input = (props) => {
  const { value, type, placeholder, classname, onChange } = props;

  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      className={classname}
      onChange={onChange}
    />
  );
};

export default Input;
