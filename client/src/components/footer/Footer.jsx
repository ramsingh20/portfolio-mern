import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo/Brand Section */}
          <div className="footer-brand text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tighter text-gray-900 mb-2">
              Ram Singh<span className="text-blue-600">.</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xs uppercase tracking-widest font-semibold">
              Full Stack Developer & Designer
            </p>
          </div>

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
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-all text-xl">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-all text-xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-all text-xl">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-50 text-center">
          <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold">
            © {new Date().getFullYear()} Ram Singh. All rights reserved. 
            <span className="block md:inline mt-2 md:mt-0 md:ml-4 text-gray-300">
              Built with MERN Stack
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};