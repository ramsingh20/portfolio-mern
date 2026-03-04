import { useAuth } from "../store/auth";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { PiHandWavingDuotone } from "react-icons/pi";
import { IoMdDownload } from "react-icons/io";
import { GoRocket } from "react-icons/go";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiGit, SiJavascript } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";


export const About = () => {
  const { user } = useAuth();

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white pt-32 pb-20">
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-blue-600 font-black tracking-[0.15em] uppercase text-xs mb-6 flex items-center gap-2"
            >
              <PiHandWavingDuotone size={30} /> Get to know me
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl font-black text-gray-900 mb-8 tracking-tight"
            >
              About <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Me</span>
            </motion.h1>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <motion.p
                custom={0}
                variants={paragraphVariants}
                initial="hidden"
                animate="visible"
                className="font-medium"
              >
                Hi! I am {user ? user.username : "Ram Singh"}. A passionate Full Stack Developer who likes to convert complex problems into simple and beautiful digital solutions.
              </motion.p>
              <motion.p
                custom={1}
                variants={paragraphVariants}
                initial="hidden"
                animate="visible"
                className="font-medium"
              >
                My focus is always on writing high-quality code and prioritizing user experience. I use modern design patterns with the MERN stack.
              </motion.p>
              <motion.p
                custom={2}
                variants={paragraphVariants}
                initial="hidden"
                animate="visible"
                className="font-medium"
              >
                When I am not coding, I explore new frameworks or improve my UI designs.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex gap-6 items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-blue-500/40 transition-all inline-block border border-blue-500/50"
                >
                  💬 Let's Talk
                </NavLink>
              </motion.div>
              <motion.button 
                whileHover={{ x: 5 }}
                className="border-b-2 border-blue-600 text-gray-900 font-bold hover:text-blue-600 transition-all flex items-center"
              >
                <IoMdDownload className="inline-block mr-2 text-xl" />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side: Image/Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            {/* Animated background blur */}
            <motion.div 
              animate={{ 
                x: [0, 20, -20, 0],
                y: [0, -20, 20, 0]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full z-0 blur-3xl opacity-60"
            ></motion.div>
            
            <motion.div 
              whileHover={{ y: -16, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full h-[500px] bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white"
            >
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Working on code" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* 2. Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-40"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-5xl font-black text-gray-900 mb-6"
          >
            My <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Tech Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 text-lg mb-10 font-medium"
          >
            Tools and technologies I work with daily <GoRocket className="inline-block mr-2 text-xl" />
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "React", icon: SiReact, color: "text-blue-500 " },
              { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
              { name: "Express", icon: SiExpress, color: "text-gray-800" },
              { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
              { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400" },
              { name: "Git", icon: SiGit, color: "text-orange-600" },
              { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
              { name: "REST APIs", icon: AiOutlineApi, color: "text-indigo-600" }
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.05 }}
                className="bg-white/80 backdrop-blur-md px-6 py-8 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all text-center group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 flex justify-center items-center">
                  <skill.icon className={`w-10 h-10 ${skill.color}`} />
                </div>
                <p className="font-bold text-gray-800 text-sm md:text-base">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
};