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
    <section className="p-4 md:p-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload <span className="text-blue-600">Project</span></h1>
          <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Admin Dashboard Only</p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div className="bg-gray-50 p-8 rounded-[35px] border border-gray-100 shadow-sm space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Title</label>
              <input type="text" name="service" value={data.service} onChange={handleInput} required className="w-full bg-white border border-gray-200 px-5 py-4 rounded-2xl focus:outline-none focus:border-blue-600 transition-all" placeholder="Project name..." />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Tech Stack (comma separated)</label>
              <input type="text" name="price" value={data.price} onChange={handleInput} required className="w-full bg-white border border-gray-200 px-5 py-4 rounded-2xl focus:outline-none focus:border-blue-600 transition-all" placeholder="e.g. React, Node, Tailwind" />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">GitHub / Live Link</label>
              <input type="text" name="provider" value={data.provider} onChange={handleInput} required className="w-full bg-white border border-gray-200 px-5 py-4 rounded-2xl focus:outline-none focus:border-blue-600 transition-all" placeholder="https://..." />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Brief Description</label>
              <textarea name="description" value={data.description} onChange={handleInput} required rows="4" className="w-full bg-white border border-gray-200 px-5 py-4 rounded-2xl focus:outline-none focus:border-blue-600 transition-all" placeholder="Explain the project logic..."></textarea>
            </div>

            <button type="submit" className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-100 flex justify-center items-center gap-2">
              Save Project 💾
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};