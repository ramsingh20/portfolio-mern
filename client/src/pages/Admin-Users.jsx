import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const AdminUsers = () => {
    const { authorizationToken, baseURL } = useAuth()
    const [users, setUsers] = useState([]);

    const getAllUsersData = async () => {
        try {
            const response = await fetch(`${baseURL}/api/admin/users`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                },
            });

            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }

    // delete the user on delete button
    const deleteUser = async (id) => {
        try {
            const response = await fetch(`${baseURL}/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken
                }
            });

            const data = await response.json();
            console.log(`Users After Delete :-${data}`);

            if (response.ok) {
                getAllUsersData();
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getAllUsersData();
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-8 pb-20'
        >
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h1 className="text-5xl font-black text-gray-900 mb-2">
                        Manage <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Users</span>
                    </h1>
                    <p className="text-gray-600 text-lg font-medium">View and manage all registered users</p>
                </motion.div>

                {users.length === 0 ? (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-16"
                    >
                        <p className="text-gray-500 text-lg">No users found 👥</p>
                    </motion.div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="overflow-x-auto rounded-2xl border border-gray-200/50 shadow-lg bg-white/80 backdrop-blur-md"
                    >
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200/50">
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.1em] text-gray-600">Name</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.1em] text-gray-600">Email</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.1em] text-gray-600">Phone</th>
                                    <th scope="col" className="px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.1em] text-gray-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((currElem, index) => {
                                    return (
                                        <motion.tr 
                                            key={index}
                                            variants={itemVariants}
                                            whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)", x: 4 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className="border-b border-gray-100 last:border-b-0 hover:shadow-sm transition-all"
                                        >
                                            <td className="px-6 py-4 font-bold text-gray-900">{currElem.username}</td>
                                            <td className="px-6 py-4 text-gray-700">{currElem.email}</td>
                                            <td className="px-6 py-4 text-gray-700">{currElem.phone}</td>
                                            <td className="px-6 py-4 text-center">
                                                <div className="flex gap-3 justify-center">
                                                    <motion.button 
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-sm hover:shadow-md"
                                                    >
                                                        <Link to={`/admin/users/${currElem._id}/edit`} className="block">
                                                            ✏️ Edit
                                                        </Link>
                                                    </motion.button>
                                                    <motion.button 
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => deleteUser(currElem._id)}
                                                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-sm hover:shadow-md"
                                                    >
                                                        🗑️ Delete
                                                    </motion.button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </motion.div>
                )}
            </div>
        </motion.section>
    )
}
