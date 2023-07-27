import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen md:py-20 container bg-backgroundColor mx-auto">
      {/* Left side - Logo */}
      <div className="flex flex-col  items-center  w-full md:w-1/3 transform rotate-90 sm:rotate-90 md:rotate-0 -lg:rotate-180 hidden md:block">
        <img
          src="/assets/Dirise_logo.svg"
          alt="Logo"
          className="h-full  mb-10"
        />
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-2/3 flex-col justify-center items-center flex">
        <div className="">
          <h1 className="2xl:text-3xl text-colorThemeDarkVariant font-bold">
            Welcome Back ABCD !
          </h1>
          <form className="mt-10">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-textSecondary font-light text-sm font-bold mb-2"
              >
                Email Adress
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border input-custom rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-textSecondary font-light text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border input-custom rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="text-textColor hover:text-blue-700 font-medium text-sm text-center mx-auto"
              >
                i forgot my password
              </a>
            </div>
            <h6 className="mt-4 mx-auto text-center font-light"> Or</h6>
            <div className="flex flex-col justify-between items-center">
              <div className="flex gap-4 mb-4">
                <img src="/assets/google.svg" alt="" className="w-4" />
                <span className="font-light text-textSecondary text-sm">
                  Login with Google
                </span>
              </div>
              <div className="flex gap-4">
                <img src="/assets/facebook.svg" alt="" className="w-4" />
                <span className="font-light text-textSecondary text-sm">
                  Login with Facebook
                </span>
              </div>
            </div>
            <div className="border border-gray-300 h mt-10"></div>
            <div className="mt-5      text-center">
              <span className="font-light text-textSecondary text-sm">
                Don’t have account ?
              </span>
              <Link href="/Signup">
                <h1 className="mt-5 text-MainColor text-sm"> Sign up </h1>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
