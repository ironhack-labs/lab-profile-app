import React from 'react';
import { useForm } from 'react-hook-form';
import { doLogin } from '../authService';

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => doLogin(data.Username, data.Password);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Username" name="Username" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Password" name="Password" type="password" ref={register({required: true, maxLength: 100})} />

      <input type="submit" />
    </form>
  );
}