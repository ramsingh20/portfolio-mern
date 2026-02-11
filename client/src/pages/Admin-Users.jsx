import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';

export const AdminUsers = () => {
    const { authorizationToken, baseURL } = useAuth()
    const [users, setUsers] = useState([]);

    const getAllUsersData = async () => {
        try {
            const response = await fetch(`${baseURL}/api/admin/users`, {
                method: "GET",
                headers: {
                    // "Authorization": `Bearer ${localStorage.getItem("token")}`
                    Authorization: authorizationToken // I think mayhave to remove ("")
                },
            });

            const data = await response.json();
            setUsers(data);
            // console.log(`Users data : ${data}`);
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
    return (
        <section className='admin-users-section'>
            <div className="container">
                <h1>Admin Users Data</h1>
            </div>
            <div className="container admin-users">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((currElem, index) => {
                            return (
                                <tr key={index}>
                                    <td>{currElem.username}</td>
                                    <td>{currElem.email}</td>
                                    <td>{currElem.phone}</td>
                                    <td>
                                        <button className=''> <Link to={`/admin/users/${currElem._id}/edit`} >Edit</Link> </button>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteUser(currElem._id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>

            </div>
        </section>
    )
}
