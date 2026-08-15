import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {socials} from "#constants/index.js";
import {WindowControls} from "#components";

const Contact = () => {
    return (
        <>
            <div id = "window-header">
                <WindowControls target="contact"/>
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img src= "/images/waliur4.jpg" alt = "waliur" className="w-20 rounded-full"/>

                <h3>Let's Build Something</h3>
                <p>Have an idea, project, or problem worth solving? Let’s turn it into something real.</p>
                <p>mdwaliur63@gmail.com</p>

                <ul>
                    {socials.map(({id, bg,link, icon, text}) => (
                        <li key={id} style = {{backgroundColor: bg}}>
                            <a href={link} target="_blank" rel="noopener noreferrer" title = {text} >
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow
