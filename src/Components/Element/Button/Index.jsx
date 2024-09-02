const Button = (props) => {
  const { children, onClick, classname } = props;
  return (
    <button onClick={onClick} className={classname}>
      {children}
    </button>
  );
};

export default Button;
