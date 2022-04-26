import React from "react";
import { Link } from "react-router-dom";



export default function Home() {
    return(
        <div className="home-background">    
        <h1>Welcome to the quiz app!</h1>
        <h2>Let's start this amazing quiz right away! </h2>
        <div className="start-button-container">
            <ul>
            <li className="start-button"><Link to="/Instructions">Let's start</Link></li>
            </ul>
        </div>
        <div className="auth-container">
        <ul>
            <li className="auth-button"><Link to="/Login">Login</Link></li>
            </ul>
        </div>
        </div>
    )
}