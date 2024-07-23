import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const carouselImages = [
    "https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6328940/pexels-photo-6328940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const carouselTexts = [
    "Invest in Chit Funds, Secure Your Future",
    "Grow Your Savings with Chit Funds",
    "Join the Chit Fund Community Today",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen bg-gray-700">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="m-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row w-full lg:w-[1000px] h-auto lg:h-[600px]"
      >
        <div className="w-full lg:w-1/2 p-8 relative">
          <div className="absolute top-4 left-4 z-20">
            <h2 className="text-white text-2xl font-bold">CHIT FUND</h2>
          </div>
          <div className="absolute top-4 right-4 z-20">
            <button className="text-white text-sm hover:bg-gray-600 bg-gray-500 rounded-lg px-2 py-1 transition duration-300">
              Back to website →
            </button>
          </div>
          <div className="relative w-full h-full">
            {carouselImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: currentSlide === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            ))}
            <div className="absolute bottom-8 left-8 text-white z-20">
              <motion.h3
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-2"
              >
                {carouselTexts[currentSlide]}
              </motion.h3>
              <div className="flex mt-4">
                {carouselImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-8 h-1 rounded mr-2 ${
                      currentSlide === index ? "bg-white" : "bg-gray-400"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-8 bg-gray-900">
          <a href="/user">
            <h2 className="text-3xl font-bold text-white mb-6 text-center lg:text-left">
              Create an account
            </h2>
          </a>
          <p className="text-gray-400 mb-8 text-center lg:text-left">
            Already have an account?{" "}
            <a href="/signin" className="text-purple-500 hover:underline">
              Log in
            </a>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row mb-4">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full lg:w-1/2 lg:mr-2 mb-4 lg:mb-0 px-5 py-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full lg:w-1/2 lg:ml-2 px-5 py-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 p-2 mb-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
            />
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-400 hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mr-2 px-5 py-3"
              />
              <label className="text-gray-400 text-sm">
                I agree to the{" "}
                <a href="/terms" className="text-purple-500 hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-purple-600 text-white p-2 rounded mb-4 transition duration-300 hover:bg-purple-700"
            >
              Create account
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupForm;
