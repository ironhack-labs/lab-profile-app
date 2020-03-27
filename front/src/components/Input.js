import React from "react";
import { useFormContext } from "react-hook-form";

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return;
};

export const InputBox = React.forwardRef(
  ({ label, name, type = "text" }, ref) => {
    const { errors } = useFormContext();
    return (
      <div>
        <label>{label}</label>
        <input
          type={type}
          className={hasError(errors, name)}
          name={name}
          ref={ref}
        />
        {errors[name]?.message && <div>{errors[name].message}</div>}
      </div>
    );
  }
);
