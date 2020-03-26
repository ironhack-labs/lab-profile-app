import React from "react";
import { InputText, LabelText, ErrorMessage } from "./styles/input.styles";
import { useFormContext } from "react-hook-form";

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return;
};

export const InputBox = React.forwardRef(
  ({ className, label, name, type = "text" }, ref) => {
    const { errors } = useFormContext();
    return (
      <div className="box-input">
        <LabelText>{label}</LabelText>
        <InputText
          type={type}
          className={hasError(errors, name)}
          name={name}
          ref={ref}
        />
        {errors[name]?.message && (
          <ErrorMessage>{errors[name].message}</ErrorMessage>
        )}
      </div>
    );
  }
);
