import { NavLink, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { motion } from "framer-motion";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <h1 className="text-center mt-20">Loading...</h1>;
  if (!user.isAdmin) return <Navigate to="/" />;

  return (
    <div className="flex min-h-screen bg-gray-50 pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 p-6 flex flex-col gap-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Admin Panel</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="/admin/users" className={({isActive}) => `px-4 py-2 rounded-xl text-sm font-semibold transition-all ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>
            👥 Users
          </NavLink>
          <NavLink to="/admin/contacts" className={({isActive}) => `px-4 py-2 rounded-xl text-sm font-semibold transition-all ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>
            ✉️ Messages
          </NavLink>
          <NavLink to="/service" className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100">
            📁 View Projects
          </NavLink>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};