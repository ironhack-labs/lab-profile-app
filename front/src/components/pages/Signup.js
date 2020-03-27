import React from 'react';
import { useForm } from 'react-hook-form';
import { doSignup } from '../authService';

export default function Signup() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data.Username);
    doSignup(data.Username, data.Password, data.Campus, data.Course);
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Username" name="Username" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Password" type="password" name="Password" ref={register({required: true, maxLength: 100})} />
      <select name="Campus" ref={register({ required: true })}>
        <option value="Madrid">Madrid</option>
        <option value=" Barcelona"> Barcelona</option>
        <option value=" Miami"> Miami</option>
        <option value=" Paris"> Paris</option>
        <option value=" Berlin"> Berlin</option>
        <option value=" Amsterdam"> Amsterdam</option>
        <option value=" México"> México</option>
        <option value=" Sao Paulo"> Sao Paulo</option>
        <option value=" Lisbon"> Lisbon</option>
      </select>
      <select name="Course" ref={register({ required: true })}>
        <option value="WebDev">WebDev</option>
        <option value=" UX/UI"> UX/UI</option>
        <option value=" Data Analytics"> Data Analytics</option>
      </select>

      <input type="submit" />
    </form>
  );
}