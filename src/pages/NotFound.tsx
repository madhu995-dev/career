import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  const location = useLocation();

  useEffect(() => {
    console.info("Coming Soon page accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 text-white">
      <motion.div
        className="text-center p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated Heading */}
        <motion.h1
          className="mb-4 text-5xl font-extrabold tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          🚀 Coming Soon...
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mb-6 text-lg text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          We’re working hard to bring you something amazing! Stay tuned.
        </motion.p>

        {/* Button */}
        <motion.a
          href="/dashboard"
          className="px-6 py-3 rounded-lg bg-white text-purple-600 font-semibold shadow-lg hover:bg-gray-200 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Return to Dashboard
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
