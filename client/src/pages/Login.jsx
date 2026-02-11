import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import login from "../assets/images/login.png";
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const {saveTokenInLocalStora, baseURL} = useAuth();

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({...user, [name]: value})
    }
    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const response = await fetch("http://localhost:5000/api/auth/login", {
    //             method: "POST",
    //             hearder: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(user)
    //         })
    //         // console.log("Response Data : ", response);

    //         if (response.ok) {
    //             const responseData = await response.json();
    //             console.log("after login: ", responseData);
    //             // setUser({ email: "", password: "" });
    //             navigate("/");
    //         }

    //     } catch (error) {
    //         console.log(error);
    //     }
        
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${baseURL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const responseData = await response.json();
            console.log("after login: ", responseData);
            
            if (response.ok) {
                // store the token in Local Storage
                saveTokenInLocalStora(responseData.token);
                // localStorage.setItem("Res from server token",responseData.token);
                toast.success("Login Successful");
                navigate("/");
            } else {
                toast.error(responseData.extraDetails ? responseData.extraDetails.join(', ') : responseData.message);
                console.log("invalid credential");
            }
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <>
        <section>
            <main>
                <div className="section-registration">
                    <div className='container grid grid-two-cols'>
                        <div className='registration-image reg-img'>
                            <img 
                            src={login} 
                            alt="a nurse with a cute look" 
                            width='400'
                            height='500'
                            />
                        </div>
                        <div className="registration-form">
                            <h1 className='main-heading mb-3'>Login Form</h1>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input 
                                    type="text" 
                                    name='email'
                                    value={user.email}
                                    onChange={handleInput}
                                    placeholder='email'
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password">password</label>
                                    <input 
                                    type="text" 
                                    name='password'
                                    value={user.password}
                                    onChange={handleInput}
                                    placeholder='password'
                                    />
                                </div>
                                <br />
                                <button type='submit' className='btn btn-submit'>Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
  )
}
