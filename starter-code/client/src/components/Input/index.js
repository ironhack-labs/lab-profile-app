import React from 'react';
import { useFormContext } from 'react-hook-form';
import { InputBase, Error, SelectBase } from './utils/styles.js';

export const Input = React.forwardRef(
  ({ placeholder, name, type, defaultValue = '' }, ref) => {
    const { errors } = useFormContext();
    const errorHandler = () => {
      if (errors[name]?.message) {
        return errors[name].type == 'pattern' ? true : false;
      } else {
        return false;
      }
    };
    return (
      <>
        {errorHandler() && <Error>{errors[name].message}</Error>}
        <InputBase
          type={type}
          name={name}
          placeholder={
            errors[name]?.message ? errors[name].message : placeholder
          }
          ref={ref}
          errors={errors}
          defaultValue={defaultValue}
        />
      </>
    );
  }
);

export const Select = React.forwardRef(
  ({ placeholder, name, options, selection }, ref) => {
    const { errors } = useFormContext();
    const errorHandler = () => {
      if (errors[name]?.message) {
        return errors[name].type == 'pattern' ? true : false;
      } else {
        return false;
      }
    };
    return (
      <>
        {errorHandler() && <Error>{errors[name].message}</Error>}
        <SelectBase
          name={name}
          placeholder={
            errors[name]?.message ? errors[name].message : placeholder
          }
          ref={ref}
          errors={errors}
        >
          <option value='' key='999'>
            Please select a {name}
          </option>
          {options.map((option, i) => {
            return selection === option ? (
              <option value={option} key={i} selected>
                {option}
              </option>
            ) : (
              <option value={option} key={i}>
                {option}
              </option>
            );
          })}
        </SelectBase>
      </>
    );
  }
);
