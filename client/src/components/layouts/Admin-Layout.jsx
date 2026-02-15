import { NavLink, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { motion } from "framer-motion";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <h1 className="text-center mt-20">Loading...</h1>;
  if (!user.isAdmin) return <Navigate to="/" />;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-white/80 backdrop-blur-md border-r border-gray-200/50 p-6 flex flex-col gap-4 shadow-lg">
        <motion.h2 className="text-xs font-black uppercase tracking-[0.15em] text-blue-600 mb-6 flex items-center gap-2" initial={{ opacity: 0 }}>
          <span className="w-2 h-2 bg-blue-600 rounded-full" />
          <span>Admin Control</span>
        </motion.h2>
        <nav className="flex flex-col gap-2 space-y-1">
          {[
            { to: "/admin/users", icon: "👥", label: "Users" },
            { to: "/admin/contacts", icon: "✉️", label: "Messages" },
            { to: "/service", icon: "📁", label: "View Projects" },
            { to: "/admin/projects/add", icon: "➕", label: "Add Project" }
          ].map((link, i) => (
            <NavLink 
              key={i}
              to={link.to} 
              className={({isActive}) => `px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
              }`}
            >
              <span className="mr-2">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-gray-200/50 min-h-[80vh]"
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};