import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1 className="text-2xl mb-5 mt-11 font-semibold text-center">
        Login Page
      </h1>
      <div className="max-w-xl mx-auto ">
        <form className="flex flex-col">
          <input className="border mt-5 p-2" type="text" name="name" placeholder="user name"></input>
          <input className="border mt-5 p-2" type="password" name="password" placeholder="password"></input>
          <button className="mt-5 bg-green-600 p-3 rounded-xl">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
