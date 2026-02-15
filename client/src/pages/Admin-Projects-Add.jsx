import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export const AdminProjectsAdd = () => {
  const [data, setData] = useState({
    service: "",
    description: "",
    price: "", // Isse hum Tech Stack ki tarah use kar rahe hain
    provider: "", // Isse hum Github link ki tarah use kar rahe hain
  });

  const { authorizationToken, baseURL } = useAuth();

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/api/admin/services/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("New Project Added! 🚀");
        setData({ service: "", description: "", price: "", provider: "" });
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Upload failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-8 pb-20 px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <h1 className="text-5xl font-black text-gray-900 mb-3">
            Upload <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Project</span>
          </h1>
          <p className="text-blue-600 text-sm tracking-[0.15em] uppercase font-bold">🚀 Admin Dashboard Only</p>
        </motion.div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-md p-12 rounded-3xl border border-gray-200/50 shadow-2xl space-y-6 relative overflow-hidden"
          >
            {/* Decorative gradient background */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full z-0 blur-3xl opacity-40"></div>
            
            <div className="relative z-10 space-y-5">
              {[
                { name: "service", type: "text", label: "Project Title", placeholder: "E-commerce Platform", description: "Name of your project" },
                { name: "price", type: "text", label: "Tech Stack", placeholder: "React, Node.js, Tailwind", description: "Technologies used (comma separated)" },
                { name: "provider", type: "url", label: "GitHub / Live Link", placeholder: "https://github.com/...", description: "Link to repository or live demo" }
              ].map((field, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <label className="block text-xs font-bold uppercase tracking-[0.1em] text-gray-600 mb-2">{field.label}</label>
                  <p className="text-xs text-gray-500 mb-2">{field.description}</p>
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type={field.type} 
                    name={field.name} 
                    value={data[field.name]} 
                    onChange={handleInput} 
                    required 
                    className="w-full bg-gray-50 border border-gray-200 px-5 py-3.5 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium"
                    placeholder={field.placeholder}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-xs font-bold uppercase tracking-[0.1em] text-gray-600 mb-2">Brief Description</label>
                <p className="text-xs text-gray-500 mb-2">Explain what your project does</p>
                <motion.textarea 
                  whileFocus={{ scale: 1.02 }}
                  name="description" 
                  value={data.description} 
                  onChange={handleInput} 
                  required 
                  rows="4" 
                  className="w-full bg-gray-50 border border-gray-200 px-5 py-3.5 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium resize-none"
                  placeholder="Describe the project features, functionality, and impact..."
                />
              </motion.div>

              <motion.button 
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/40 transition-all mt-8 border border-blue-500/50 flex justify-center items-center gap-2"
              >
                💾 Save Project
              </motion.button>
            </div>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
};