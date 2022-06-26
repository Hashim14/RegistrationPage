import React from "react";
import "./FormInput.css";

const FormInput = (props: any) => {
  //   const [focused, setFocused] = React.useState(false);

  const {
    label,
    onChange,
    id,
    placeholder,
    type,
    errorMessage,
    required,
    pattern,
    name,
    focused,
    onBlur,
  } = props;

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        pattern={pattern}
        onBlur={onBlur}
      />
      {focused && <span>{errorMessage}</span>}
    </div>
  );
};

export default FormInput;
