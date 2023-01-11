import { useState } from "react";
import FormInput from "../../component/form-input/form-input.component";

const SignUpPage = () => {
  return (
    <div className="">
      <h2>Don't have an account?</h2>
      <span>Sign up with just your email</span>
      <div>
        <form>
          <FormInput
            label="First Name"
            type="text"
            name="firstName"
            id="firstName"
            required
          />

          <FormInput
            label="Last Name"
            type="text"
            name="lastName"
            id="lastName"
            required
          />

          <FormInput
            label="Email"
            type="email"
            name="email"
            id="email"
            required
          />

          <button> Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
