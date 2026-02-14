import { useState } from "react";
import { useAuth } from "../store/auth";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user, API } = useAuth();

  // Agar user logged in hai, to auto-fill name and email
  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        toast.success("Message sent successfully!");
      }
    } catch (error) {
      toast.error("Message not sent!");
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }}
          className="contact-content"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Let's <span className="text-blue-600">Connect</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Mera portfolio pasand aaya? Ya koi project discuss karna chahte ho? 
            Niche diye gaye form ko bharein, main jald hi aapse baat karunga.
          </p>
          
          <div className="space-y-4 text-gray-700 font-medium">
            <p className="flex items-center gap-3 italic">
              <span className="text-blue-600">📍</span> India
            </p>
            <p className="flex items-center gap-3 italic">
              <span className="text-blue-600">✉️</span> ram@example.com
            </p>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Username</label>
              <input
                type="text"
                name="username"
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
                required
                className="w-full bg-white border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-600 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
                required
                className="w-full bg-white border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-600 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
                required
                rows="4"
                className="w-full bg-white border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-600 transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-100"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};