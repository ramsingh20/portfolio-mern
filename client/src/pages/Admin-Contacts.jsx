import React from 'react'
import { useAuth } from '../store/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const AdminContacts = () => {

  const [contactsData, setContactsData] = useState([]);
  
  const { authorizationToken, baseURL } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch(`${baseURL}/api/admin/contacts`, {
        method: "GET",
        headers: {
          // "Authorization": `Bearer ${localStorage.getItem("token")}`
          Authorization: authorizationToken
        },
      });

      const data = await response.json();
      console.log(`Contacts data : ${data}`);

      if (response.ok) {
        setContactsData(data)
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  // Defining the function deleteContactById
  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`${baseURL}/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken
        },
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        getContactsData();
        toast.success("Contact deleted successfully");
      } else {
        toast.error("Not Deleted");
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getContactsData();
  }, [])


  return (
    <section className='admin-contacts-section'>
      <h1>Admin Contacts Data</h1>

      <div className="container admin-users">
        {contactsData.map((currElem, index) => {

          const { username, email, message, _id } = currElem;

          return (
            <div key={index}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{message}</p>
              <button className='btn' onClick={() => deleteContactById(_id)}>Delete</button>
            </div>
          )
        })}
      </div>
    </section>
    // <div>{contactsData.map((currElem, index) => {
    //   return <p key={index}>{currElem.message}</p>
    // })}</div>
  )
}
