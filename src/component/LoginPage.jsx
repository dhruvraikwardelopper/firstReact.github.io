import React from "react";

const LoginPage = () => {
  return (
    <div className="h-[100vh] w-[100vw] font-serif bg-[url(./ddd3.webp)] bg-no-repeat bg-cover  flex items-center justify-center">
      <div className=" w-[25vw] bg-[#1111113f] p-7 rounded-2xl">
        <div className="flex justify-center text-2xl ">
          <h1 className="text-2xl ps-1 text-[#fff] text-center">
            SignUp/Login
          </h1>
        </div>
        <div className="flex items-center">
          <label for="user">
            <img src="./user.gif" className="w-[46px] " />
          </label>
          <input
            type="email"
            id="user"
            placeholder="Enter your Email or Username "
            className="w-full p-2 my-5 bg-white outline-0"
          />
        </div>

        <div className="flex items-center">
          <label for="user">
            <img src="./password.gif" className="w-[46px] " />
          </label>
          <input
            type="password"
            placeholder="Password "
            className="w-full p-2 my-5 bg-white outline-0"
          />
        </div>

        <button
          type="submit"
          className="w-full p-1.5 my-3 bg-[#344adb] text-[#fff] hover:bg-[#0927ea] hover:text-shadow-2xs hover:text-shadow-red-800"
        >
          Sign In(Login)
        </button>

        <h1 className="text-white">
          If{" "}
          <a href="#forget.jsx" className="text-[#c1ed3d] underline my-5 hover:cursor-pointer">
            forget password
          </a>{" "}
          ?
        </h1>
        <h1 className="text-white">
          New User{" "}
          <a className="text-[#bdd51c] underline my-5 hover:cursor-pointer">
            Register
          </a>{" "}
          here .
        </h1>
      </div>
    </div>
  );
};

export default LoginPage;
