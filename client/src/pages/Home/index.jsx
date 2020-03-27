import React from "react";
import AuthHeader from "../../components/AuthHeader";
import AuthButton from "../../components/AuthButton";
import MainLayout from "../../layouts/Main";

const Home = () => {
  return (
    <MainLayout>
      <AuthHeader />
      <AuthButton text="Login" color="green" link="/login" position="150" />
      <AuthButton text="Sign Up" color="green" link="/signup" position="100" />
    </MainLayout>
  );
};

export default Home;
