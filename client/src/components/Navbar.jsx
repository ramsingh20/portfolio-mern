import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <div className="logo-brand text-2xl font-bold tracking-tighter text-gray-900">
          <NavLink to="/">
            Portfolio<span className="text-blue-600">.</span>
          </NavLink>
        </div>

        <nav>
          <ul className="flex gap-8 items-center text-sm font-medium text-gray-600 uppercase tracking-widest">
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
            
            {isLoggedIn ? (
              <li className="bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition-all">
                <NavLink to="/logout">Logout</NavLink>
              </li>
            ) : (
              <>
                <li className="hover:text-blue-600 transition-colors border border-gray-200 px-4 py-1.5 rounded-full">
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li className="bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition-all">
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};