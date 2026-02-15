import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "MERN Expert", "UI/UX Enthusiast", "Problem Solver"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <section className="container mx-auto px-6 pt-40 pb-20 flex flex-col items-center justify-center text-center">
        {/* Intro Tag */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-8 border border-blue-200/50 backdrop-blur-sm"
        >
          ✨ Welcome to my universe
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-tight"
        >
          Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Ram Singh</span>
        </motion.h1>

        {/* Typewriter Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-4xl text-gray-700 font-semibold h-16 flex items-center gap-3"
        >
          <span>I'm a</span>
          <span className="text-blue-600 font-black">{text}</span>
          <Cursor cursorColor="#2563eb" cursorStyle="|" />
        </motion.div>

        {/* Short Bio */}
        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-gray-600 text-lg mt-8 leading-relaxed font-medium"
        >
          Mera project logic aur clean design par focused hota hai. Main modern web technologies ka use karke scalable and user-friendly solutions banata hoon.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-6 mt-12 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to="/contact"
              className="inline-block bg-gradient-to-r from-gray-900 to-gray-800 text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur-sm border border-gray-700/50"
            >
              💼 Hire Me
            </NavLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to="/service"
              className="inline-block border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-200/50"
            >
              🚀 View Projects
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Stats / Analytics Section (Enhanced) */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 border-t border-gray-200/50 pt-16 w-full max-w-5xl"
        >
          {[
            { num: "5+", label: "Projects", icon: "🎯" },
            { num: "100%", label: "Dedication", icon: "💪" },
            { num: "24/7", label: "Support", icon: "⚡" },
            { num: "MERN", label: "Stack", icon: "🛠️" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.05 }}
              className="text-center group cursor-pointer"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <h3 className="text-4xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">{stat.num}</h3>
              <p className="text-gray-500 text-xs uppercase tracking-[0.15em] mt-2 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};