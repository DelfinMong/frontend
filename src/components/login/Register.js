import React from "react";
import useForm from "react-hook-form";

const Register = () => {
  const { register, handleSubmit, errors, getValues, reset } = useForm();

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Username: <span></span>
        <input
          type="text"
          name="username"
          ref={register({
            required: true
          })}
        />
      </label>
      <br />
      {errors.username && errors.username.type === "required" && (
        <p>This field is required!</p>
      )}

      <label>
        Password: <span></span>
        <input
          type="password"
          name="password"
          ref={register({
            required: true
          })}
        />
      </label>
      <br />
      {errors.password && errors.password.type === "required" && (
        <p>This field is required!</p>
      )}

      <label>
        Re-type Password: <span></span>
        <input
          type="password"
          name="retyped_password"
          ref={register({
            required: true,
            validate: (value) => {
              const data = getValues();
              return value === data.password;
            }
          })}
        />
        {errors.retyped_password &&
          errors.retyped_password.type === "required" && (
            <p>This field is required!</p>
          )}
        {errors.retyped_password &&
          errors.retyped_password.type === "validate" && (
            <p>Passwords must match!</p>
          )}
      </label>
      <br />

      <input type="submit" value="Create Account" />
    </form>
  );
};

export default Register;
