"use client"
import React from "react";
import RegisterUser from "./RegisterUser";

const RegisterPage = () => {
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;

    const userData = { name, password };

    const data = await RegisterUser(userData);
    console.log(data);
    if(data) alert("successfull register");

  };
  return (
    <div>
      <h1 className="text-2xl mb-5 mt-11 font-semibold text-center">
        Register Page
      </h1>
      <div className="max-w-xl mx-auto ">
        <form onSubmit={handleRegister} className="flex flex-col">
          <input
            className="border mt-5 p-2"
            type="text"
            name="name"
            placeholder="user name"
          ></input>
          <input
            className="border mt-5 p-2"
            type="password"
            name="password"
            placeholder="password"
          ></input>
          <button className="mt-5 bg-green-600 p-3 rounded-xl">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
