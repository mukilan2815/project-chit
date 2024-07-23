import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCalendarDay,
  faHandHoldingUsd,
  faUserShield,
  faChartLine,
  faSearch,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      href: "/chit-group-creation",
      icon: faPlus,
      text: "New Chit Group",
    },
    {
      href: "/daily-chit-group",
      icon: faCalendarDay,
      text: "Chit Group",
    },
    {
      href: "/chit-against-loan",
      icon: faHandHoldingUsd,
      text: "Loan",
    },
    {
      href: "/subscribers-guarantee",
      icon: faUserShield,
      text: "Subscriber's Guarantee",
    },
    {
      href: "/finance-profile-valuation",
      icon: faChartLine,
      text: "Profile Valuation",
    },
  ];

  return (
    <header className="bg-gray-800 shadow-md border-b border-gray-700 px-4 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-purple-500 font-bold text-2xl cursor-pointer">
          CHITFUND
        </div>
        <div className="relative hidden md:block">
          <input
            type="text"
            className="bg-gray-700 text-gray-300 rounded-lg pl-10 pr-4 py-2 w-96 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Search..."
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-3 text-gray-400"
          />
        </div>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className="text-white hover:text-purple-500 transition-colors flex items-center space-x-2 font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.text}</span>
          </motion.a>
        ))}
        <motion.a
          href="/"
          className="bg-black text-white px-4 py-2 rounded-lg font-semibold transition-colors hover:bg-gray-900"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Sign Up
        </motion.a>
        <motion.a
          href="/signin"
          className="border border-purple-500 text-purple-500 px-4 py-2 rounded-lg font-semibold transition-colors hover:bg-purple-500 hover:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Log In
        </motion.a>
      </nav>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white"
        >
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faTimes : faBars}
            size="lg"
          />
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-800 border-t border-gray-700 flex flex-col items-center space-y-4 py-4 md:hidden">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-white hover:text-purple-500 transition-colors flex items-center space-x-2 font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.text}</span>
            </motion.a>
          ))}
          <motion.a
            href="/"
            className="bg-black text-white px-4 py-2 rounded-lg font-semibold transition-colors hover:bg-gray-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign Up
          </motion.a>
          <motion.a
            href="/signin"
            className="border border-purple-500 text-purple-500 px-4 py-2 rounded-lg font-semibold transition-colors hover:bg-purple-500 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Log In
          </motion.a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
