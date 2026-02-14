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
      <h1 className="text-3xl font-bold text-gray-900 mb-8">User Messages</h1>
      <div className="grid gap-6">
        {contactData.map((curContact, index) => (
          <div key={index} className="p-6 border border-gray-100 rounded-2xl flex justify-between items-start hover:border-blue-200 transition-all">
            <div>
              <p className="font-bold text-gray-900">{curContact.username}</p>
              <p className="text-sm text-blue-600 mb-2">{curContact.email}</p>
              <p className="text-gray-600">{curContact.message}</p>
            </div>
            <button 
              onClick={() => deleteContactById(curContact._id)}
              className="text-red-500 font-bold text-sm hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};