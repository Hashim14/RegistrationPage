import React from "react";
import FormInput from "./FormInput";

const LoginPage = () => {
  return (
    <div>
      <div>
        <form>
          <h1>Login Form</h1>
          <FormInput label="Username" placeholder="Username" />
          <FormInput label="Password" placeholder="Password" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
