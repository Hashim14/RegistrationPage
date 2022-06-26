import React from "react";
import FormInput from "./FormInput";

const Form = () => {
  const [values, setValues] = React.useState<any>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [focused, setFocused] = React.useState<boolean>(false);
  const [status, setStatus] = React.useState<boolean>(false);

  const formFields = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Not a valid Email Adrress!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:
        "Password should be 7-19 characters and include at least 1 letter, 1 number and 1 special character.",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{7,19}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "Password do not Match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStatus(true);
    console.log(values);
  };

  const onBlur = () => {
    setFocused(true);
  };
  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {status && <div className="status">Registration Successful</div>}
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        {formFields.map((val: any) => (
          <FormInput
            key={val.id}
            {...val}
            value={values[val.name]}
            onChange={onChange}
            focused={focused}
            onBlur={onBlur}
          />
        ))}
        <button disabled={status} onClick={() => setFocused(true)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
