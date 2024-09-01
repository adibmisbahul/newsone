import Input from "./Input";
import Label from "./Label";

import "./Input.css";
const InputForm = (props) => {
  const { value, text, placeholder, type, onChange } = props;
  return (
    <div className="wrapInput">
      <Label text={text} classname={"label"} />
      <Input
        value={value}
        type={type}
        placeholder={placeholder}
        classname={"input"}
        onChange={onChange}
      />
    </div>
  );
};

export default InputForm;
