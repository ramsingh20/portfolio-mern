import React from 'react'
import { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AdminUpdate = () => {

    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const params = useParams();
    console.log("params single user:- ", params);

    const { authorizationToken, baseURL } = useAuth();

    // get single user data
    const getAllUsersData = async () => {
        try {
            const response = await fetch(`${baseURL}/api/admin/users${params.id}`, {
                method: "GET",
                headers: {
                    // "Authorization": `Bearer ${localStorage.getItem("token")}`
                    Authorization: authorizationToken
                },
            });

            const data = await response.json();
            console.log(`Users single data : ${data}`);
            setData(data);

            // if (response.ok) {
            //     getAllUsersData();
            // }

        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        getAllUsersData();
    }, [])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...user, [name]: value })
    }

    // to update data dynamically
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${baseURL}/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken
                },
                body: JSON.stringify(data),
            }
        );

        if (response.ok) {
            toast.success("User Updated Successfully");
        } else {
            toast.error("Not Updated:- ",response.message);
        }
            // const data = await response.json();
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <section className='section-contact'>
        <div className="contact-content container">
            <h1 className='main-heading'>Update User Data</h1>
        </div>
        <div className="container grid grid-two-cols">
            <section className='section-form'>
                <form onsubmit={handleSubmit} >
                    <div>
                        <label htmlFor="username">username</label>
                        <input 
                        type="text" 
                        name='username' 
                        id='username' 
                        autoComplete='off'
                        value={data.username}
                        onChange={handleInput}
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">email</label>
                        <input 
                        type="email" 
                        name='email' 
                        id='email' 
                        autoComplete='off'
                        value={data.email}
                        onChange={handleInput}
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone">phone</label>
                        <input 
                        type="phone" 
                        name='phone' 
                        id='phone' 
                        autoComplete='off'
                        value={data.phone}
                        onChange={handleInput}
                        required
                        />
                    </div>

                    <div><button type='submit' className=''>Update</button></div>
                </form>
            </section>
        </div>
    </section>
  )
}
