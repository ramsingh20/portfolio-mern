import { useAuth } from "../store/auth";
import { motion } from "framer-motion";

export const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services bg-gray-50 min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            My <span className="text-blue-600">Projects</span>
          </motion.h1>
          <p className="text-gray-600 max-w-xl mx-auto uppercase tracking-widest text-sm">
            Mera kaam aur meri skills ka ek chota sa overview
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((curElem, index) => {
            const { price, description, provider, service } = curElem;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Project Image Placeholder */}
                <div className="h-56 bg-gray-200 overflow-hidden relative">
                   <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                   <img 
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${service}`} 
                    alt="project" 
                    className="w-full h-full object-cover"
                   />
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                      {price}
                    </span>
                    <a href={provider} target="_blank" className="text-gray-400 hover:text-gray-900">
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service}
                  </h2>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {description}
                  </p>

                  <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
                    <button className="text-sm font-bold text-gray-900 group-hover:text-blue-600 flex items-center gap-2">
                      View Case Study <span>→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};