/* eslint-disable no-unused-vars */
import Authlayout from "../components/Layouts/Authlayout";
import LoginLayout from "../components/Layouts/LoginLayout";
import React from "react";

const Home = () => {
  return (
    <Authlayout>
      <LoginLayout />
    </Authlayout>
  );
};

export default Home;
