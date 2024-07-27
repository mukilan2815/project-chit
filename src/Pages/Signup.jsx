import React from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="hidden md:flex md:w-1/2 h-full p-5 bg-blue-200/20">
        <img
          src="https://finocent.com/wp-content/uploads/2021/07/why-finocent.svg"
          alt="Decorative Banner"
          className="w-full h-full object-contain pt-20"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to Chitfund
          </h1>
          <p className="text-md text-gray-600 mb-6">Your ChitFund</p>

          <p className="text-4xl hidden md:block md:bg-transparent sm:w-full  text-gray-600 absolute top-4 left-4 font-bold">
            <span className="text-red-500">💰</span> Chit Fund
          </p>

          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block font-bold text-md text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block font-bold text-md text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-md font-bold text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              onClick={() => {
                navigate("/user");
              }}
              className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Existing to Chitfund?{" "}
            <a href="/signin" className="text-blue-600 hover:underline">
              Already have account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
