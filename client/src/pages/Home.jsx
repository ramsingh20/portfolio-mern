import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { GalaxyBackground } from "../components/GalaxyBackground";
import { ThreeScene } from "../components/ThreeScene";
import { StyledBadge } from "../components/StyledBadge";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;


export const Home = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "MERN Expert", "UI/UX Enthusiast", "Problem Solver"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Section>
    <main className="min-h-screen bg-black relative overflow-hidden">
      <GalaxyBackground />
      
      <section className="relative z-10 container mx-auto px-6 pt-40 pb-20 flex flex-col items-center justify-center text-center">
        {/* Intro Tag */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-4 border border-purple-400/30 backdrop-blur-md flex items-center gap-4"
        >
          ✨ Welcome to my universe
          <StyledBadge className="hidden sm:inline-block">Featured</StyledBadge>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight drop-shadow-lg"
        >
          Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">Ram Singh</span>
        </motion.h1>

        {/* Typewriter Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-4xl text-gray-200 font-semibold h-16 flex items-center gap-3 relative"
        >
          <span>I'm a</span>
          <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-black">{text}</span>
          <Cursor cursorColor="#00d4ff" cursorStyle="|" />

          {/* 3D canvas - visible on md+ */}
          <div className="hidden md:block absolute right-20 -top-28">
            <ThreeScene modelScale={0.6} />
          </div>
        </motion.div>

        {/* Short Bio */}
        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-gray-300 text-lg mt-8 leading-relaxed font-medium"
        >
          Mera project logic aur clean design par focused hota hai. Main modern web technologies ka use karke scalable and user-friendly solutions banata hoon.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-6 mt-12 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to="/contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 backdrop-blur-sm border border-purple-400/50"
            >
              💼 Hire Me
            </NavLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to="/service"
              className="inline-block border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-full font-bold hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/30"
            >
              🚀 View Projects
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Stats / Analytics Section (Enhanced) */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 border-t border-purple-500/30 pt-16 w-full max-w-5xl"
        >
          {[
            { num: "5+", label: "Projects", icon: "🎯" },
            { num: "100%", label: "Dedication", icon: "💪" },
            { num: "24/7", label: "Support", icon: "⚡" },
            { num: "MERN", label: "Stack", icon: "🛠️" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.05 }}
              className="text-center group cursor-pointer p-4 rounded-2xl bg-white/5 border border-purple-400/20 backdrop-blur-sm hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <h3 className="text-4xl font-black text-white group-hover:text-cyan-400 transition-colors">{stat.num}</h3>
              <p className="text-gray-400 text-xs uppercase tracking-[0.15em] mt-2 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
    </Section>
  );
};