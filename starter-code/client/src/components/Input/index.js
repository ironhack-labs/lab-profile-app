import React from 'react';
import { useFormContext } from 'react-hook-form';
import { InputBase, Error } from './utils/styles.js';

export const Input = React.forwardRef(
  ({ placeholder, name, type = 'text', defaultValue = '' }, ref) => {
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
