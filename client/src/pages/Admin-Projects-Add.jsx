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
        toast.success("Project added successfully!");
        setData({ service: "", description: "", price: "", provider: "" });
      } else {
        toast.error("Failed to add project");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="p-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Add New <span className="text-blue-600">Project</span></h1>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-gray-50 p-10 rounded-[30px] border border-gray-100">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Project Name</label>
            <input type="text" name="service" value={data.service} onChange={handleInput} required className="w-full p-4 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none" placeholder="e.g. E-commerce App" />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Tech Stack</label>
            <input type="text" name="price" value={data.price} onChange={handleInput} required className="w-full p-4 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none" placeholder="e.g. React, Node, MongoDB" />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">GitHub / Live Link</label>
            <input type="text" name="provider" value={data.provider} onChange={handleInput} required className="w-full p-4 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none" placeholder="https://github.com/..." />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Short Description</label>
            <textarea name="description" value={data.description} onChange={handleInput} required rows="4" className="w-full p-4 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Project ke baare mein thoda batayein..."></textarea>
          </div>

          <button type="submit" className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg">
            Upload to Portfolio
          </button>
        </form>
      </motion.div>
    </section>
  );
};