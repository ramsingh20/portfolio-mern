import React from 'react'
import support from "../assets/images/support.png";
import { useAuth } from '../store/auth';
import { useState } from 'react';

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
    // const [contact, setContact] = useState(defaultContactFormData);
    const [contact, setContact] = useState({
        username: '',
        email: '',
        message: '',
    })
    const { user, baseURL } = useAuth();
    console.log("frontend user ", user.email);

    const [userData, setUserData] = useState(true)


    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: '',
        })
        setUserData(false);
    } 

    // lets tackle our handleInput
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });

        // setContact((prev) => ({
        //     ...prev,
        //     [name]: value,
        // }))
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${baseURL}/api/form/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                setContact({
                    username: '',
                    email: '',
                    message: '',
                });

                const data = await response.json();
                console.log(data);
                alert("Message sent successfully")
            }
        } catch (error) {
            console.log(error);
            alert("Message not sent");
        }
    };

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">contact us</h1>
                </div>
                {/* contact page main  */}
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src={support} alt="we are always ready to help" />
                    </div>

                    {/* contact form content actual  */}
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    value={contact.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message">message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    autoComplete="off"
                                    value={contact.message}
                                    onChange={handleInput}
                                    required
                                    cols="30"
                                    rows="6"
                                ></textarea>
                            </div>

                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </section>
                </div>

                <section className="mb-3">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7539.621787861441!2d72.88728587852582!3d19.115950230919843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8095afee9cb%3A0x26403261423f85c4!2sHotel%20Powai%20Palace!5e0!3m2!1sen!2sin!4v1769509189732!5m2!1sen!2sin" 
                        width="100%" 
                        height="450" 
                        // style="border:0;" 
                        allowFullScreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe> */}
                </section>
            </section>
        </>
    )
}
