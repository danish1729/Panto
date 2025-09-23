import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-lg rounded-2xl p-10 max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center"
        >
          <span className="text-green-600 text-4xl">✔</span>
        </motion.div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Thank You for Your Order!
        </h1>
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully. We’ll send you a confirmation
          email shortly.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#E58411] text-white px-6 py-3 rounded-lg hover:bg-[#cf730c] transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ThankYou;
