import { useAuth } from "../store/auth";
import { motion } from "framer-motion";

export const Service = () => {
  const { services } = useAuth();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="section-services bg-gradient-to-b from-white via-gray-50 to-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            My <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-xl mx-auto uppercase tracking-[0.15em] text-xs font-bold"
          >
            Mera kaam aur meri skills ka ek chota sa overview
          </motion.p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
          {services.map((curElem, index) => {
            const { price, description, provider, service } = curElem;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -16, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
              >
                {/* Project Image Placeholder */}
                <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                   <img 
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${service}`} 
                    alt="project" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   />
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-center">
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="text-blue-600 font-bold text-xs uppercase tracking-[0.1em] bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-2 rounded-full border border-blue-200/50 backdrop-blur-sm"
                    >
                      {price}
                    </motion.span>
                    <motion.a 
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      href={provider} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors text-2xl"
                    >
                      <i className="fab fa-github"></i>
                    </motion.a>
                  </div>

                  <h2 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service}
                  </h2>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 font-medium">
                    {description}
                  </p>

                  <div className="pt-6 border-t border-gray-100 flex justify-between items-center group-hover:border-blue-200/50 transition-colors">
                    <motion.button 
                      whileHover={{ x: 8 }}
                      className="text-sm font-bold text-gray-900 group-hover:text-blue-600 flex items-center gap-2 transition-colors"
                    >
                      View Case Study <span className="text-xl">→</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};