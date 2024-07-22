import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user");
  };

  return (
    <div className="flex h-screen bg-gray-700">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="m-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full md:w-[1000px] h-auto md:h-[600px]"
      >
        <div className="w-full md:w-1/2 p-8 relative">
          <div className="absolute top-4 left-4 z-20">
            <h2 className="text-white text-2xl font-bold">CHIT FUND</h2>
          </div>
          <div className="absolute top-4 right-4 z-20">
            <button className="text-white text-sm hover:bg-gray-600 bg-gray-500 rounded-lg px-2 py-1 transition duration-300">
              Back to website →
            </button>
          </div>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <img
              src="https://img.freepik.com/free-photo/plant-growing-coins-glass-jar_155003-1174.jpg?w=360&t=st=1721660919~exp=1721661519~hmac=4c74f690bb5d271358dc00585992b5c02ee186860165c0fc6fb5f54453e10cc4"
              alt="Background"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 bg-gray-900">
          <h2 className="text-3xl font-bold text-white mb-6 text-center md:text-left">
            Login to Your Account
          </h2>
          <p className="text-gray-400 mb-8 text-center md:text-left">
            Don't have an account?{" "}
            <a href="/" className="text-purple-500 hover:underline">
              Sign up
            </a>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username or Email"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
                className="w-full px-5 py-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              />
            </div>
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-400 hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-gray-400 hover:underline">
                Forgot Password?
              </a>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-purple-600 text-white p-2 rounded mb-4 transition duration-300 hover:bg-purple-700"
            >
              Login
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
