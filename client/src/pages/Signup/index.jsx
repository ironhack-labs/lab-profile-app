import React from "react";
import MainLayout from "../../layouts/Main";
import { useForm, FormContext } from "react-hook-form";
import AuthInput from "../../components/AuthInput";
import Header from "../../components/Header";
import SideHeader from "../../components/SideHeader";
import SideButton from "../../components/SideButton";

const Signup = () => {
  const methods = useForm();
  const { register, handleSubmit, errors } = methods;

  const onSubmit = data => {};
  return (
    <FormContext>
      <MainLayout>
        <div>
          <Header title="Signup" />
          <AuthInput text="Username" label="username" type="text" />
          <AuthInput text="Password" label="password" type="password" />
          <AuthInput text="Campus" label="campus" type="text" />
          <AuthInput text="Course" label="course" type="text" />
        </div>
        <SideHeader title="Hello!!" subtitle="Welcome to IronProfile!" />
        <SideButton disclaimer="disclaimer" buttonText="Create the Account" link="/loggedin" />
      </MainLayout>
    </FormContext>
  );
};

export default Signup;
