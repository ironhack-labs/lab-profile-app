import React from 'react';
import { useFormContext } from 'react-hook-form';
import { InputBase, Error } from './utils/styles.js';

export const Input = React.forwardRef(
  ({ placeholder, name, type = 'text' }, ref) => {
    const { errors } = useFormContext();
    return (
      <>
        <InputBase
          type={type}
          name={name}
          placeholder={
            errors[name]?.message ? errors[name].message : placeholder
          }
          ref={ref}
          errors={errors}
        />
      </>
    );
  }
);
