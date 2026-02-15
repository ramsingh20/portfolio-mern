import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { storeTokenInLS, baseURL } = useAuth();
  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success("Login Successful");
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-white px-6 pt-20 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-2xl border border-gray-200/50 relative"
      >
        {/* Decorative gradient background */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full z-0 blur-3xl opacity-40"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10 relative z-10"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-black text-gray-900 mb-3"
          >
            Welcome <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Back</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-600 text-sm tracking-[0.15em] uppercase font-bold"
          >
            🔐 Admin Login
          </motion.p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          {[
            { name: "email", type: "email", label: "Email Address", placeholder: "admin@example.com" },
            { name: "password", type: "password", label: "Password", placeholder: "••••••••" }
          ].map((field, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <label className="block text-xs font-bold uppercase tracking-[0.1em] text-gray-600 mb-2">{field.label}</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={user[field.name]}
                onChange={handleInput}
                required
                className="w-full bg-gray-50 border border-gray-200 px-5 py-3.5 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium"
              />
            </motion.div>
          ))}

          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/40 transition-all mt-6 border border-blue-500/50"
          >
            🚀 Login to Dashboard
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};