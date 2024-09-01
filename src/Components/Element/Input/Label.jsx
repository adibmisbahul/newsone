const Label = (props) => {
  const { text, classname } = props;
  return <label className={classname}>{text}</label>;
};

export default Label;
