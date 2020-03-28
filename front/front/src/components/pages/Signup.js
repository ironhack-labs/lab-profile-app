import React from "react";
import { useForm } from "react-hook-form";
import Button from "../buttons/Index";
function Signup() {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="usename" ref={register} /> {/* register an input */}
        {errors.username && "username is required."}
        <input name="password" ref={register({ required: true })} />
        {errors.password && "Password is required."}
        <input name="campus" ref={register} />
        {errors.campus && "Please enter campus."}
        <input name="course" ref={register} />
        {errors.campus && "Please enter course."}
        <input type="submit" />
      </form>
      <Button />
    </>
  );
}

export default Signup;
