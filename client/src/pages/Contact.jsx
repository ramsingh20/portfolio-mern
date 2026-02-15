import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user, baseURL } = useAuth();

  // Agar user logged in hai, to auto-fill name and email
  useEffect(() => {
    if (userData && user) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
      setUserData(false);
    }
  }, [user, userData]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Use EmailJS when env variables are provided, otherwise fallback to server API
    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: contact.username,
            from_email: contact.email,
            message: contact.message,
          },
          PUBLIC_KEY
        );
        setContact(defaultContactFormData);
        toast.success("Message sent via EmailJS!");
        return;
      } catch (err) {
        console.warn("EmailJS failed, falling back to API:", err);
        toast.info("EmailJS failed, trying server...", { autoClose: 1500 });
      }
    }

    // Fallback: send to backend API
    try {
      const response = await fetch(`${baseURL}/api/form/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        toast.success("Message sent successfully!");
      } else {
        const errData = await response.json();
        toast.error(errData?.message || "Message not sent!");
      }
    } catch (error) {
      toast.error("Message not sent!");
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-32 pb-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-content"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-black text-gray-900 mb-8 tracking-tight leading-tight"
          >
            Let's <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Connect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg mb-10 leading-relaxed font-medium"
          >
            Mera portfolio pasand aaya? Ya koi project discuss karna chahte ho? 
            Niche diye gaye form ko bharein, main jald hi aapse baat karunga.
          </motion.p>
          
          <motion.div className="space-y-6 text-gray-700 font-bold">
            {[
              { icon: "📍", text: "India" },
              { icon: "✉️", text: "ram@example.com" }
            ].map((item, i) => (
              <motion.p 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform">{item.icon}</span>
                <span className="group-hover:text-blue-600 transition-colors">{item.text}</span>
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { name: "username", type: "text", label: "Username", placeholder: "Your name" },
              { name: "email", type: "email", label: "Email Address", placeholder: "your@email.com" }
            ].map((field, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <label className="block text-xs font-bold uppercase tracking-[0.1em] text-gray-600 mb-2">{field.label}</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  autoComplete="off"
                  value={contact[field.name]}
                  onChange={handleInput}
                  required
                  className="w-full bg-gray-50 border border-gray-200 px-5 py-3.5 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium"
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-xs font-bold uppercase tracking-[0.1em] text-gray-600 mb-2">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                placeholder="Tell me about your project..."
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
                required
                rows="4"
                className="w-full bg-gray-50 border border-gray-200 px-5 py-3.5 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium resize-none"
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/30 transition-all mt-6 border border-gray-700/50"
            >
              ✉️ Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};