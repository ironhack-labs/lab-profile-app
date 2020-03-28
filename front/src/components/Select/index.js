import React from "react";
import { SelectText, LabelText, ErrorMessage } from "./styles/select.styles";
import { useFormContext } from "react-hook-form";

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return;
};

export const SelectBox = React.forwardRef(
  ({ className, label, name, value, options = value }, ref) => {
    const { errors } = useFormContext();

    return (
      <div className="box-input">
        <LabelText>{label}</LabelText>
        <SelectText className={hasError(errors, name)} name={name} ref={ref}>
          {value.map((value, i) => {
            return (
              <option key={i} value={value}>
                {options[i]}
              </option>
            );
          })}
        </SelectText>
        {errors[name]?.message && (
          <ErrorMessage>{errors[name].message}</ErrorMessage>
        )}
      </div>
    );
  }
);
