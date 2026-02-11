import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import register from "../assets/images/register.png"
import { toast } from 'react-toastify';


export const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })

    const navigate = useNavigate();
    const {saveTokenInLocalStora, baseURL} = useAuth();

    // const saveTokenInLocalStora = (token) => {
    //     return localStorage.setItem("token", token);
    // }

    // handling input value
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    // handling the form submission
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log(user);
    //     try {
    //         const response = await fetch('http://localhost:5000/api/auth/register', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(user)
    //         })
    //         console.log(response);
    //         // const data = await response.json();
    //         // console.log(data);
    //     } catch (error) {
    //         console.log("Regi Err",error);
    //     }
    // }
    // handle form on submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const response = await fetch(`${baseURL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const responseData = await response.json();
            console.log("Response from server :- ",responseData);
            
            if (response.ok) {
                // store the token in Local Storage
                saveTokenInLocalStora(responseData.token);
                // localStorage.setItem("Res from server token", responseData.token);
                setUser({ username: "", email: "", phone: "", password: "" });
                toast.success("Registration Successful");
                navigate("/");
            } else {
                toast.error(responseData.extraDetails ? responseData.extraDetails.join(', ') : responseData.message);
                console.log("error inside response ", error);
            }
        } catch (error) {
            console.error("Register Error:- ", error);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registation-image reg-img">
                                <img
                                    src={register}
                                    alt="a girl trying to do registration"
                                    width='500'
                                    height='500'
                                />
                            </div>
                            {/* regi */}
                            <div className="registation-form">
                                <h1 className='main-heading mb-3'>Registration Form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input
                                            type="text"
                                            name='username'
                                            placeholder='username'
                                            id='username'
                                            required
                                            autoComplete='off'
                                            value={user.username}
                                            onChange={handleInput}
                                        />

                                        <label htmlFor="email">email</label>
                                        <input
                                            type="eamil"
                                            name='email'
                                            placeholder='email'
                                            id='email'
                                            required
                                            autoComplete='off'
                                            value={user.email}
                                            onChange={handleInput}
                                        />

                                        <label htmlFor="phone">phone</label>
                                        <input
                                            type="phone"
                                            name='phone'
                                            // value={} 
                                            placeholder='phone'
                                            id='phone'
                                            required
                                            autoComplete='off'
                                            value={user.phone}
                                            onChange={handleInput}
                                        />

                                        <label htmlFor="password">password</label>
                                        <input
                                            type="password"
                                            name='password'
                                            // value={} 
                                            placeholder='password'
                                            id='password'
                                            required
                                            autoComplete='off'
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <br />
                                    <button type="submit" className='btn btn-submit'>Register Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}
