import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Line, Bar } from "react-chartjs-2";
import {
  faUser,
  faBriefcase,
  faChartLine,
  faCalendar,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Navbar from "./Navbar";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AccountPreferences = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [originalData, setOriginalData] = useState({
    firstName: "Alvian",
    lastName: "Teddy Cahya Putra",
    email: "alvian.teddy@example.com",
    phone: "+62 123 456 789",
    location: "Jakarta, Indonesia",
    position: "Interaction Designer at GoPay",
    password: "",
  });
  const [formData, setFormData] = useState({ ...originalData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Here you can implement the logic to save the updated data
    setOriginalData({ ...formData }); // Save the changes
    setEditMode(false); // Close the form
  };

  const handleDiscardChanges = () => {
    setFormData({ ...originalData }); // Revert to original data
    setEditMode(false); // Close the form
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
    if (editMode) {
      setFormData({ ...originalData }); // Reset form data if editing is canceled
    }
  };

  // Sample data for charts
  const contributionsData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Contributions ($)",
        data: [500, 600, 700, 800, 650, 900, 750],
        fill: false,
        backgroundColor: "#8b5cf6",
        borderColor: "#8b5cf6",
        tension: 0.1,
      },
    ],
  };

  const auctionsData = {
    labels: ["Auction 1", "Auction 2", "Auction 3"],
    datasets: [
      {
        label: "Number of Items",
        data: [20, 15, 30],
        backgroundColor: "rgba(139, 92, 246, 0.2)",
        borderColor: "#8b5cf6",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen text-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            User Dashboard
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* User Profile Overview */}
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                User Profile Overview
              </h3>
              <p className="text-gray-300 mb-2">
                <strong>Name:</strong> {formData.firstName} {formData.lastName}
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Position:</strong> {formData.position}
              </p>
              <p className="text-gray-300 mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <strong>Email:</strong> {formData.email}
              </p>
              <p className="text-gray-300 mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <strong>Phone:</strong> {formData.phone}
              </p>
              <p className="text-gray-300 mb-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <strong>Location:</strong> {formData.location}
              </p>
              <button
                onClick={handleEditToggle}
                className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition"
              >
                {editMode ? "Cancel" : "Edit Profile"}
              </button>
            </motion.div>

            {/* Edit Profile Form */}
            {editMode && (
              <motion.div
                className="bg-gray-700 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Edit Profile
                </h3>
                <form onSubmit={handleSaveChanges}>
                  <div className="mb-4">
                    <label
                      htmlFor="firstName"
                      className="block text-gray-300 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-gray-800 text-gray-100 border border-gray-600 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="lastName"
                      className="block text-gray-300 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-gray-800 text-gray-100 border border-gray-600 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-gray-800 text-gray-100 border border-gray-600 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-300 mb-1">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-gray-800 text-gray-100 border border-gray-600 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="location"
                      className="block text-gray-300 mb-1"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-gray-800 text-gray-100 border border-gray-600 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="position"
                      className="block text-gray-300 mb-1"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-gray-800 text-gray-100 border border-gray-600 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-gray-300 mb-1"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full p-2 bg-gray-800 text-gray-100 border border-gray-600 rounded"
                      />
                      <button
                        type="button"
                        onClick={handlePasswordToggle}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                      >
                        <FontAwesomeIcon
                          icon={showPassword ? faEye : faEyeSlash}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button
                      type="submit"
                      className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={handleDiscardChanges}
                      className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
                    >
                      Discard Changes
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Current Chit Groups */}
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                Current Chit Groups
              </h3>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Group A - 5 Members</li>
                <li>Group B - 10 Members</li>
                <li>Group C - 3 Members</li>
              </ul>
            </motion.div>

            {/* Contributions Summary */}
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
                <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                Contributions Summary
              </h3>
              <div className="h-64">
                <Line
                  data={contributionsData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                      tooltip: {
                        callbacks: {
                          label: (tooltipItem) => `$${tooltipItem.raw}`,
                        },
                      },
                    },
                  }}
                />
              </div>
              <p className="text-gray-300 mt-4 mb-2">
                <strong>Total Contributions:</strong> $2,500
              </p>
              <p className="text-gray-300">
                <strong>Pending Contributions:</strong> $500
              </p>
            </motion.div>

            {/* Upcoming Auctions */}
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
                <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                Upcoming Auctions
              </h3>
              <div className="h-64">
                <Bar
                  data={auctionsData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                      tooltip: {
                        callbacks: {
                          label: (tooltipItem) => `${tooltipItem.raw} Items`,
                        },
                      },
                    },
                  }}
                />
              </div>
              <ul className="list-disc pl-5 text-gray-300 mt-4">
                <li>Auction 1 - July 25, 2024</li>
                <li>Auction 2 - August 1, 2024</li>
                <li>Auction 3 - August 15, 2024</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPreferences;
