import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken, baseURL } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch(`${baseURL}/api/admin/contacts`, {
        method: "GET",
        headers: { Authorization: authorizationToken },
      });
      const data = await response.json();
      if (response.ok) setContactData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`${baseURL}/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: authorizationToken },
      });
      if (response.ok) {
        getContactsData();
        toast.success("Message deleted");
      }
    } catch (error) {
      toast.error("Not deleted");
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <div>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-black text-gray-900 mb-10 flex items-center gap-3"
      >
        <span className="text-3xl">💬</span>
        <span>User <span className="text-blue-600">Messages</span></span>
      </motion.h1>
      <motion.div className="grid gap-4">
        {contactData.length > 0 ? (
          contactData.map((curContact, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 8 }}
              className="p-6 border border-gray-200 rounded-2xl flex justify-between items-start hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 group"
            >
              <div className="flex-1">
                <p className="font-black text-gray-900 text-lg group-hover:text-blue-600 transition-colors">{curContact.username}</p>
                <p className="text-sm text-blue-600 mb-2 font-semibold">{curContact.email}</p>
                <p className="text-gray-600 leading-relaxed">{curContact.message}</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => deleteContactById(curContact._id)}
                className="text-red-500 font-bold text-sm hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg transition-all ml-4 flex-shrink-0"
              >
                🗑️ Delete
              </motion.button>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-gray-500"
          >
            <p className="text-lg">No messages yet</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};