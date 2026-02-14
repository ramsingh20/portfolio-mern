import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export const Register = () => {
  const [user, setUser] = useState({ username: "", email: "", phone: "", password: "" });
  const navigate = useNavigate();
  const { storeTokenInLS, baseURL } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success("Registration Successful");
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white p-10 rounded-[35px] shadow-sm border border-gray-100"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-500 text-sm tracking-wide uppercase font-semibold">Join the journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 ml-1">Username</label>
            <input
              type="text"
              name="username"
              placeholder="ram_singh"
              value={user.username}
              onChange={handleInput}
              className="w-full bg-gray-50 border border-gray-100 px-5 py-3.5 rounded-2xl focus:outline-none focus:border-blue-600 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 ml-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              value={user.email}
              onChange={handleInput}
              className="w-full bg-gray-50 border border-gray-100 px-5 py-3.5 rounded-2xl focus:outline-none focus:border-blue-600 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 ml-1">Phone</label>
            <input
              type="number"
              name="phone"
              placeholder="9876543210"
              value={user.phone}
              onChange={handleInput}
              className="w-full bg-gray-50 border border-gray-100 px-5 py-3.5 rounded-2xl focus:outline-none focus:border-blue-600 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 ml-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={user.password}
              onChange={handleInput}
              className="w-full bg-gray-50 border border-gray-100 px-5 py-3.5 rounded-2xl focus:outline-none focus:border-blue-600 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg mt-4"
          >
            Register Now
          </button>
        </form>
      </motion.div>
    </section>
  );
};