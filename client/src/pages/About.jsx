import { useAuth } from "../store/auth";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const About = () => {
  const { user } = useAuth();

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
              Get to know me
            </p>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              About <span className="text-blue-600">Me</span>
            </h1>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Hi! Main {user ? user.username : "Ram Singh"} hoon. Ek passionate Full Stack Developer jo complex problems ko simple aur beautiful digital solutions mein convert karna pasand karta hai.
              </p>
              <p>
                Mera focus hamesha high-quality code likhne aur user-experience ko prioritize karne par hota hai. Main MERN stack ke saath modern design patterns ka use karta hoon.
              </p>
              <p>
                Jab main coding nahi kar raha hota, tab main nayi frameworks explore karta hoon ya apne UI designs ko refine karta hoon.
              </p>
            </div>

            <div className="mt-10 flex gap-6">
              <NavLink
                to="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-100"
              >
                Let's Talk
              </NavLink>
              <button className="border-b-2 border-blue-600 text-gray-900 font-bold hover:text-blue-600 transition-all">
                Download Resume
              </button>
            </div>
          </motion.div>

          {/* Right Side: Image/Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-[450px] bg-gray-100 rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Working on code" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-50 rounded-full -z-0"></div>
          </motion.div>
        </div>

        {/* 2. Skills Section */}
        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-16 italic underline decoration-blue-600 underline-offset-8 text-4xl">
            My Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-10 opacity-70">
            {["React", "Node.js", "Express", "MongoDB", "Tailwind", "Git", "JavaScript"].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="bg-gray-50 px-8 py-4 rounded-2xl border border-gray-100 font-bold text-gray-700 shadow-sm"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};