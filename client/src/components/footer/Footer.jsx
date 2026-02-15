import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200/50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo/Brand Section */}
          <motion.div className="footer-brand text-center md:text-left" whileHover={{ scale: 1.05 }}>
            <h2 className="text-2xl font-black tracking-tighter text-gray-900 mb-2">
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Dev</span>Ram<span className="text-blue-600">.</span>
            </h2>
            <p className="text-gray-500 text-xs max-w-xs uppercase tracking-[0.15em] font-bold">
              Full Stack Developer & Designer
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              <li className="hover:text-blue-600 transition-colors">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:text-blue-600 transition-colors">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="hover:text-blue-600 transition-colors">
                <NavLink to="/service">Projects</NavLink>
              </li>
              <li className="hover:text-blue-600 transition-colors">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          {/* Social Icons Section */}
          <motion.div className="flex gap-6">
            {[
              { icon: "fab fa-github", url: "#" },
              { icon: "fab fa-linkedin", url: "#" },
              { icon: "fab fa-twitter", url: "#" }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.url} 
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-blue-600 transition-all text-2xl"
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div className="mt-16 pt-8 border-t border-gray-200/50 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">
            © {new Date().getFullYear()} Ram Singh. All rights reserved. 
            <span className="block md:inline mt-2 md:mt-0 md:ml-4 text-gray-400 font-semibold">
              ✨ Built with <span className="text-blue-600 font-black">MERN Stack</span>
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};