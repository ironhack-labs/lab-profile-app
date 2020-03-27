// import React from "React";

// export const Login = () => {
//   return <div>hola</div>;
// };

import React from "React";
import { useForm } from "react-hook-form";

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return "";
};

export const Login = () => {
  const { register, handleSubmit, errors } = useForm({ mode: onblur });

  const onSubmit = data => {
    console.log("Data is");
    console.log(data);
  };

  return (
    <>
      <h1>Sing Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input
            className={hasError(errors, "username")}
            name="username"
            ref={register({ required: true })}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className={hasError(errors, "password")}
            name="password"
            ref={register({ required: true })}
          />
        </div>
        <div>
          <label>Campus</label>
          <input
            className={hasError(errors, "campus")}
            name="campus"
            ref={register({ required: true })}
          />
        </div>
        <div>
          <label>Course</label>
          <input
            className={hasError(errors, "course")}
            name="course"
            ref={register({ required: true })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
