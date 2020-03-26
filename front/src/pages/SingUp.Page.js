import React from "React";
import { useForm } from "react-hook-form";

export const SingUp = () => {
  const { register, handledSubmit, errors } = useForm({ mode: onblur });
  const Onsubmit = data => {
       console.log(data);
  };
  return(
<>
<h1>Sing Up</h1>
<form Onsubmit={handledSubmit}>
        <div>
          <label>Username</label>
          <Input
            className={hasError(errors, "username")}
            name="username"
            ref={register({ required: true })}
          />
        </div>
        <div>
          <label>Password</label>
          <Input
            className={hasError(errors, "username")}
            name="username"
            ref={register({ required: true })}
          />
        </div>

</form>
<>

  );
};
