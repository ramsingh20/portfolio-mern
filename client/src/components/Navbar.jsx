import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { motion } from "framer-motion";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <motion.div className="logo-brand text-2xl font-black tracking-tighter text-gray-900" whileHover={{ scale: 1.05 }}>
          <NavLink to="/" className="flex items-center gap-1">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Dev</span>
            <span className="text-gray-900">Ram</span>
            <span className="text-blue-600 text-3xl">.</span>
          </NavLink>
        </motion.div>

        <nav>
          <ul className="flex gap-10 items-center text-xs font-bold text-gray-600 uppercase tracking-[0.1em]">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/service", label: "Projects" },
              { to: "/contact", label: "Contact" }
            ].map((link, i) => (
              <motion.li key={i} whileHover={{ y: -3 }} className="relative">
                <NavLink to={link.to} className="hover:text-blue-600 transition-colors group">
                  {link.label}
                  <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300" />
                </NavLink>
              </motion.li>
            ))}
            
            {isLoggedIn ? (
              <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                <NavLink to="/logout" className="font-bold">Logout</NavLink>
              </motion.li>
            ) : (
              <>
                <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-50 transition-all">
                  <NavLink to="/register" className="font-bold">Register</NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                  <NavLink to="/login" className="font-bold">Login</NavLink>
                </motion.li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};