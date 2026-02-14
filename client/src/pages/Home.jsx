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

  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center text-center">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
        >
          Welcome to my universe
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          Hi, I'm <span className="text-blue-600">Ram Singh</span>
        </motion.h1>

        {/* Typewriter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-500 font-medium h-12"
        >
          I am a <span>{text}</span>
          <Cursor cursorColor="#2563eb" />
        </motion.div>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl text-gray-600 text-lg mt-6 leading-relaxed"
        >
          Mera project logic aur clean design par focused hota hai. Main modern web technologies ka use karke scalable and user-friendly solutions banata hoon.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <NavLink
            to="/contact"
            className="bg-gray-900 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200"
          >
            Hire Me
          </NavLink>
          <NavLink
            to="/service"
            className="border border-gray-200 text-gray-900 px-8 py-3.5 rounded-full font-semibold hover:border-gray-900 transition-all"
          >
            View Projects
          </NavLink>
        </motion.div>

        {/* Stats / Analytics Section (Minimalist) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-gray-100 pt-10 w-full max-w-4xl"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900">5+</h3>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">100%</h3>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Dedication</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">24/7</h3>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Support</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">MERN</h3>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Stack</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
};