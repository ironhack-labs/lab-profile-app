import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import MainLayout from "../../layouts/Main";

const Home = () => {
  return (
    <MainLayout>
      <Header title="IronProfile" subtitle="Profile app" />
      <Button text="Login" color="green" link="/login" />
      <Button text="Sign Up" color="green" link="/signup" />
    </MainLayout>
  );
};

export default Home;
